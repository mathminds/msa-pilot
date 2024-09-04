import sqlite3
import pandas as pd
from typing import List, Dict, Any, Optional

class DataAnalyzer:
    def __init__(self, db_path: str):
        """
        Initializes the DataAnalyzer with a path to the local database.
        
        Args:
            db_path (str): Path to the SQLite database file.
        """
        self.db_path = db_path
        self.connection = None
        self.create_connection()

    def create_connection(self):
        """Creates a connection to the SQLite database."""
        try:
            self.connection = sqlite3.connect(self.db_path)
            print("Database connection successful.")
        except sqlite3.Error as e:
            print(f"Error connecting to database: {e}")

    def load_data(self, table_name: str) -> pd.DataFrame:
        """
        Loads data from a specified table into a pandas DataFrame.
        
        Args:
            table_name (str): The name of the table to load data from.
        
        Returns:
            pd.DataFrame: A DataFrame containing the data from the table.
        """
        query = f"SELECT * FROM {table_name}"
        try:
            df = pd.read_sql_query(query, self.connection)
            print(f"Data loaded from table '{table_name}' successfully.")
            return df
        except Exception as e:
            print(f"Error loading data from table '{table_name}': {e}")
            return pd.DataFrame()

    def compute_statistics(self, df: pd.DataFrame, columns: Optional[List[str]] = None) -> Dict[str, Any]:
        """
        Computes basic statistics for specified columns in a DataFrame.
        
        Args:
            df (pd.DataFrame): The DataFrame to compute statistics on.
            columns (List[str], optional): List of columns to compute statistics for.
        
        Returns:
            Dict[str, Any]: A dictionary containing descriptive statistics.
        """
        if columns is None:
            columns = df.columns
        statistics = {}
        for col in columns:
            if pd.api.types.is_numeric_dtype(df[col]):
                stats = {
                    "mean": df[col].mean(),
                    "median": df[col].median(),
                    "std_dev": df[col].std(),
                    "min": df[col].min(),
                    "max": df[col].max(),
                    "count": df[col].count()
                }
                statistics[col] = stats
        return statistics

    def compute_aggregations(self, df: pd.DataFrame, group_by: str, aggregations: Dict[str, str]) -> pd.DataFrame:
        """
        Computes aggregations (like sum, mean, etc.) for groups of data.
        
        Args:
            df (pd.DataFrame): The DataFrame to perform aggregations on.
            group_by (str): The column to group data by.
            aggregations (Dict[str, str]): A dictionary specifying columns and their aggregation functions.
        
        Returns:
            pd.DataFrame: A DataFrame containing the aggregated data.
        """
        try:
            aggregated_df = df.groupby(group_by).agg(aggregations)
            print(f"Data aggregated by '{group_by}' successfully.")
            return aggregated_df
        except Exception as e:
            print(f"Error performing aggregations: {e}")
            return pd.DataFrame()

    def compute_trends(self, df: pd.DataFrame, date_column: str, value_column: str) -> pd.DataFrame:
        """
        Computes trends (e.g., moving averages) over time for a specified value column.
        
        Args:
            df (pd.DataFrame): The DataFrame containing date and value columns.
            date_column (str): The column containing date/time information.
            value_column (str): The column to compute trends for.
        
        Returns:
            pd.DataFrame: A DataFrame containing the original data with an additional trend column.
        """
        try:
            df[date_column] = pd.to_datetime(df[date_column])
            df.sort_values(by=date_column, inplace=True)
            df['moving_average'] = df[value_column].rolling(window=3).mean()  # Example of a 3-period moving average
            print(f"Trends computed for column '{value_column}' successfully.")
            return df
        except Exception as e:
            print(f"Error computing trends: {e}")
            return pd.DataFrame()

    def close_connection(self):
        """Closes the database connection."""
        if self.connection:
            self.connection.close()
            print("Database connection closed.")

# Example usage:
if __name__ == "__main__":
    analyzer = DataAnalyzer(db_path="local_data.db")
    
    # Load data from a specific table
    df = analyzer.load_data(table_name="api_data")
    
    # Compute basic statistics for all numeric columns
    stats = analyzer.compute_statistics(df)
    print("Statistics:", stats)
    
    # Compute aggregations grouped by 'api_name'
    aggregations = {'data': 'count'}  # Example: counting occurrences per API
    aggregated_data = analyzer.compute_aggregations(df, group_by='api_name', aggregations=aggregations)
    print("Aggregated Data:", aggregated_data)
    
    # Compute trends based on a date column and a value column
    if 'timestamp' in df.columns and 'data' in df.columns:
        trend_data = analyzer.compute_trends(df, date_column='timestamp', value_column='data')
        print("Trend Data:", trend_data)
    
    # Close the connection when done
    analyzer.close_connection()
