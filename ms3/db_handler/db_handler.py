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
session=Session()


Base = declarative_base()

class NewService(Base):
    __tablename__ = 'new_services'

    id = Column(Integer, primary_key=True, autoincrement=True)
    service_code=Column(String, primary_key=True)
    title = Column(String)
    service_provider = Column(String)
    last_consent_date = Column(DateTime)
    third_party_sharing = Column(Boolean)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    def __repr__(self):
        return f"<Service(name={self.title}, service_provider={self.service_provider}, last_consent_date={self.last_consent_date}, shares_with_third_party={self.third_party_sharing} created_at={self.created_at}, updated_at={self.updated_at})>"
    
class ActiveService(Base):
    __tablename__ = 'active_services'

    id = Column(Integer, primary_key=True, autoincrement=True)
    service_code=Column(String, primary_key=True)
    title = Column(String)
    service_provider = Column(String)
    last_consent_date = Column(DateTime)
    third_party_sharing = Column(Boolean)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    def __repr__(self):
        return f"<Service(name={self.title}, service_provider={self.service_provider}, last_consent_date={self.last_consent_date}, shares_with_third_party={self.third_party_sharing} created_at={self.created_at}, updated_at={self.updated_at})>"
    
class ShareRequest(Base):
    __tablename__ = 'share_requests'

    id = Column(Integer, primary_key=True, autoincrement=True)
    request_form_id = Column(String, primary_key=True)
    service_code = Column(Integer, ForeignKey('active_services.service_code'))
    third_party_sharing = Column(Boolean)
    started_at = Column(DateTime)
    ending_at = Column(DateTime, nullable=True)
    revoked_at = Column(DateTime, nullable=True)
    sharing_status = Column(String)
    purpose = Column(String)
    request_cycle=Column(String)
    data_retain_period=Column(String)
    scopes = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    def __repr__(self):
        return f"<ShareRequest(request_form_id={self.request_form_id}, service_id={self.service_id}, third_party_sharing={self.third_party_sharing}, started_at={self.started_at}, ending_at={self.ending_at}, revoked_at={self.revoked_at}, sharing_status={self.sharing_status}, purpose={self.purpose}, request_cycle={self.request_cycle}, data_retain_period={self.data_retain_period}, scopes={self.scopes}, created_at={self.created_at}, updated_at={self.updated_at})>"
    


class DataProvider(Base):
    __tablename__ = 'data_providers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    primary_key = Column(String, primary_key=True)
    provider_name = Column(String)
    service_code = Column(Integer, ForeignKey('active_services.service_code'))
    request_form_id = Column(Integer, ForeignKey('share_requests.request_form_id'))
    provided_data = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    

    __table_args__ = (
        PrimaryKeyConstraint('service_code', 'request_form_id'),
    )

    def __repr__(self):
        return f"<DataProvider(service_id={self.service_id}, share_request_id={self.share_request_id}, provider={self.provider}, provided_data={self.provided_data}, created_at={self.created_at}, updated_at={self.updated_at})>"
    

class RevokedDataProvider(Base):
    __tablename__ = 'revoked_data_providers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    primary_key=Column(String, primary_key=True)
    service_code = Column(String, ForeignKey('active_services.service_code'))
    request_form_id = Column(String, ForeignKey('share_requests.request_form_id'))
    provider = Column(String)
    provided_data = Column(String)
    revoked_at = Column(DateTime)
    started_at = Column(DateTime)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    __table_args__ = (
        PrimaryKeyConstraint('service_code', 'request_form_id'),
    )

    def __repr__(self):
        return f"<RevokedDataProvider(service_id={self.service_id}, share_request_id={self.share_request_id}, provider={self.provider}, provided_data={self.provided_data}, revoked_at={self.revoked_at}, started_at={self.started_at}, created_at={self.created_at}, updated_at={self.updated_at})>"
 

Base.metadata.create_all(engine)    


def add_new_service(service):
    new_service=NewService(
        service_code=service['service_code'],
        title=service['title'],
        service_provider=service['serviceProvider'],
        last_consent_date=service['last_consent_date'],
        third_party_sharing=service['third_party_sharing'],
        created_at=dt.datetime.now(),
        updated_at=dt.datetime.now()
    )
    session.add(new_service)
    session.commit()
    return new_service

def update_new_service(service):
    service_to_update=session.query(NewService).filter_by(id=service['id']).first()
    service_to_update.service_code=service['service_code']
    service_to_update.title=service['title']
    service_to_update.service_provider=service['serviceProvider']
    service_to_update.last_consent_date=service['last_consent_date']
    service_to_update.third_party_sharing=service['third_party_sharing']
    service_to_update.updated_at=dt.datetime.now()
    session.commit()
    return service_to_update

def add_active_service(service):
    active_service=ActiveService(
        service_code=service['service_code'],
        title=service['title'],
        service_provider=service['serviceProvider'],
        last_consent_date=service['last_consent_date'],
        third_party_sharing=service['third_party_sharing'],
        created_at=dt.datetime.now(),
        updated_at=dt.datetime.now()
    )
    session.add(active_service)
    session.commit()
    return active_service

def update_active_service(service):
    service_to_update=session.query(ActiveService).filter_by(id=service['id']).first()
    service_to_update.service_code=service['service_code']
    service_to_update.title=service['title']
    service_to_update.service_provider=service['serviceProvider']
    service_to_update.last_consent_date=service['last_consent_date']
    service_to_update.third_party_sharing=service['third_party_sharing']
    service_to_update.updated_at=dt.datetime.now()
    session.commit()
    return service_to_update

def add_share_request(share_request):
    share_request=ShareRequest(
        request_form_id=share_request['request_form_id'],
        service_id=share_request['service_id'],
        data_provider_id=share_request['data_provider_id'],
        third_party_sharing=share_request['third_party_sharing'],
        started_at=share_request['started_at'],
        ending_at=share_request['ending_at'],
        revoked_at=share_request['revoked_at'],
        sharing_status=share_request['sharing_status'],
        purpose=share_request['purpose'],
        request_cycle=share_request['request_cycle'],
        data_retain_period=share_request['data_retain_period'],
        scopes=share_request['scopes'],
        created_at=dt.datetime.now(),
        updated_at=dt.datetime.now()
    )
    session.add(share_request)
    session.commit()
    return share_request

def update_share_request(share_request):
    share_request_to_update=session.query(ShareRequest).filter_by(id=share_request['id']).first()
    share_request_to_update.request_form_id=share_request['request_form_id']
    share_request_to_update.service_id=share_request['service_id']
    share_request_to_update.data_provider_id=share_request['data_provider_id']
    share_request_to_update.third_party_sharing=share_request['third_party_sharing']
    share_request_to_update.started_at=share_request['started_at']
    share_request_to_update.ending_at=share_request['ending_at']
    share_request_to_update.revoked_at=share_request['revoked_at']
    share_request_to_update.sharing_status=share_request['sharing_status']
    share_request_to_update.purpose=share_request['purpose']
    share_request_to_update.request_cycle=share_request['request_cycle']
    share_request_to_update.data_retain_period=share_request['data_retain_period']
    share_request_to_update.scopes=share_request['scopes']
    share_request_to_update.updated_at=dt.datetime.now()
    session.commit()
    return share_request_to_update

def add_data_provider(data_provider):
    data_provider=DataProvider(
        provider_name=data_provider['provider_name'],
        service_id=data_provider['service_id'],
        share_request_id=data_provider['share_request_id'],
        provided_data=data_provider['provided_data'],
        created_at=dt.datetime.now(),
        updated_at=dt.datetime.now()
    )
    session.add(data_provider)
    session.commit()
    return data_provider

def update_data_provider(data_provider):
    data_provider_to_update=session.query(DataProvider).filter_by(id=data_provider['id']).first()
    data_provider_to_update.provider_name=data_provider['provider_name']
    data_provider_to_update.service_id=data_provider['service_id']
    data_provider_to_update.share_request_id=data_provider['share_request_id']
    data_provider_to_update.provided_data=data_provider['provided_data']
    data_provider_to_update.updated_at=dt.datetime.now()
    session.commit()
    return data_provider_to_update

def add_revoked_data_provider(revoked_data_provider):
    for k,v in revoked_data_provider.items():
        service_cd=k
        revoked_data_providers=v


    revoked_data_provider=RevokedDataProvider(
        service_id=revoked_data_provider['service_id'],
        share_request_id=revoked_data_provider['share_request_id'],
        provider=revoked_data_provider['provider'],
        provided_data=revoked_data_provider['provided_data'],
        revoked_at=revoked_data_provider['revoked_at'],
        started_at=revoked_data_provider['started_at'],
        created_at=dt.datetime.now(),
        updated_at=dt.datetime.now()
    )
    session.add(revoked_data_provider)
    session.commit()
    return revoked_data_provider

def update_revoked_data_provider(revoked_data_provider):
    revoked_data_provider_to_update=session.query(RevokedDataProvider).filter_by(id=revoked_data_provider['id']).first()
    revoked_data_provider_to_update.service_id=revoked_data_provider['service_id']
    revoked_data_provider_to_update.share_request_id=revoked_data_provider['share_request_id']
    revoked_data_provider_to_update.provider=revoked_data_provider['provider']
    revoked_data_provider_to_update.provided_data=revoked_data_provider['provided_data']
    revoked_data_provider_to_update.revoked_at=revoked_data_provider['revoked_at']
    revoked_data_provider_to_update.started_at=revoked_data_provider['started_at']
    revoked_data_provider_to_update.updated_at=dt.datetime.now()
    session.commit()
    return revoked_data_provider_to_update

def get_new_services():
    return session.query(NewService).all()

def get_active_services():
    return session.query(ActiveService).all()

def get_share_requests(service_id):
    return session.query(ShareRequest).filter_by(service_id=service_id).all()

def get_data_providers(service_id):
    return session.query(DataProvider).filter_by(service_id=service_id).all()

def get_revoked_data_providers(service_id):
    return session.query(RevokedDataProvider).filter_by(service_id=service_id).all()

def get_new_service_by_id(service_id):
    return session.query(NewService).filter_by(id=service_id).first()

def get_new_service_by_title(title):
    return session.query(NewService).filter_by(title=title).first()

def get_active_service_by_id(service_id):
    return session.query(ActiveService).filter_by(id=service_id).first()

def get_active_service_by_title(title):
    return session.query(ActiveService).filter_by(title=title).first()

def get_share_request_by_id(share_request_id):
    return session.query(ShareRequest).filter_by(id=share_request_id).first()

def get_data_provider_by_id(data_provider_id):
    return session.query(DataProvider).filter_by(id=data_provider_id).first()

def get_revoked_data_provider_by_id(revoked_data_provider_id):
    return session.query(RevokedDataProvider).filter_by(id=revoked_data_provider_id).first()

def get_third_party_share_requests(service_id):
    return session.query(ShareRequest).filter_by(service_id=service_id, third_party_sharing=True).all()

def get_data_provider_by_service_id(service_id, share_request_id):
    return session.query(DataProvider).filter_by(service_id=service_id, share_request_id=share_request_id).all()

def get_revoked_data_provider_by_service_id(service_id, share_request_id):
    return session.query(RevokedDataProvider).filter_by(service_id=service_id, share_request_id=share_request_id).all()

