import requests
import sqlite3
import json
from typing import Dict, Any, List, Optional

class APIDataHandler:
    def __init__(self, db_path: str):
        """
        Initializes the APIDataHandler with a path to the local database.
        
        Args:
            db_path (str): Path to the SQLite database file.
        """
        self.db_path = db_path
        self.connection = None
        self.create_connection()
        self.create_tables()

    def create_connection(self):
        """Creates a connection to the SQLite database."""
        try:
            self.connection = sqlite3.connect(self.db_path)
        except sqlite3.Error as e:
            print(f"Error connecting to database: {e}")

    def create_tables(self):
        """Creates necessary tables in the database if they do not exist."""
        create_table_query = """
        CREATE TABLE IF NOT EXISTS api_data (
            id INTEGER PRIMARY KEY,
            api_name TEXT,
            data TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        """
        cursor = self.connection.cursor()
        cursor.execute(create_table_query)
        self.connection.commit()

    def fetch_data(self, url: str, params: Optional[Dict[str, Any]] = None, headers: Optional[Dict[str, str]] = None) -> Dict[str, Any]:
        """
        Fetches data from the specified API.
        
        Args:
            url (str): The URL of the API endpoint.
            params (Dict[str, Any], optional): Query parameters for the request.
            headers (Dict[str, str], optional): HTTP headers for the request.
            
        Returns:
            Dict[str, Any]: The JSON response from the API.
        """
        try:
            response = requests.get(url, params=params, headers=headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}")
        except Exception as err:
            print(f"Other error occurred: {err}")
        return {}

    def save_data(self, api_name: str, data: Dict[str, Any]):
        """
        Saves the fetched data into the database.
        
        Args:
            api_name (str): The name or identifier of the API.
            data (Dict[str, Any]): The data to store, typically the JSON response from the API.
        """
        cursor = self.connection.cursor()
        cursor.execute("INSERT INTO api_data (api_name, data) VALUES (?, ?)", (api_name, json.dumps(data)))
        self.connection.commit()

    def fetch_and_store(self, api_name: str, url: str, params: Optional[Dict[str, Any]] = None, headers: Optional[Dict[str, str]] = None):
        """
        Fetches data from an API and stores it in the local database.
        
        Args:
            api_name (str): The name or identifier of the API.
            url (str): The URL of the API endpoint.
            params (Dict[str, Any], optional): Query parameters for the request.
            headers (Dict[str, str], optional): HTTP headers for the request.
        """
        data = self.fetch_data(url, params=params, headers=headers)
        if data:
            self.save_data(api_name, data)

    def query_data(self, api_name: str) -> List[Dict[str, Any]]:
        """
        Queries stored data for a specific API from the database.
        
        Args:
            api_name (str): The name or identifier of the API.
            
        Returns:
            List[Dict[str, Any]]: A list of data entries retrieved from the database.
        """
        cursor = self.connection.cursor()
        cursor.execute("SELECT data FROM api_data WHERE api_name = ?", (api_name,))
        rows = cursor.fetchall()
        return [json.loads(row[0]) for row in rows]

    def close_connection(self):
        """Closes the database connection."""
        if self.connection:
            self.connection.close()

# Example usage:
if __name__ == "__main__":
    api_handler = APIDataHandler(db_path="local_data.db")
    
    # Fetch and store data from an example API
    api_handler.fetch_and_store(
        api_name="example_api",
        url="https://api.example.com/data",
        params={"key": "value"},
        headers={"Authorization": "Bearer YOUR_TOKEN"}
    )
    
    # Query stored data for a specific API
    stored_data = api_handler.query_data(api_name="example_api")
    print(stored_data)
    
    # Close the connection when done
    api_handler.close_connection()
