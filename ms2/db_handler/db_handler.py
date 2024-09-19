import pandas as pd 
import datetime as dt
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey, PrimaryKeyConstraint
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

DB_HOST=os.getenv("DB_HOST")
DB_PORT=os.getenv("DB_PORT")
DB_NAME=os.getenv("DB_NAME")
DB_USER=os.getenv("DB_USER")
DB_PASSWORD=os.getenv("DB_PASSWORD")


DATABASE_URL=f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
# Create a connection to the database
engine = create_engine(DATABASE_URL)

Session=sessionmaker(bind=engine)

Base = declarative_base()

def create_table(table_name):
    Base.metadata.tables[table_name].create(engine)

def to_sql(df, table_name):
    session = Session()
    try:
        df.to_sql(table_name, session.connection(), if_exists='replace', index=False)
        session.commit()
        print(f"[MS2-db_handler] Data inserted into {table_name}")
    except Exception as e:
        print(e)
        session.rollback()
    finally:
        session.close()

def read_sql(table_name):
    df=pd.DataFrame()
    session = Session()
    try:
        df = pd.read_sql_table(table_name, session.connection())
    except Exception as e:
        print(e)
    finally:
        session.close()
    return df