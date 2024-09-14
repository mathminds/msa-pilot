# from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey, PrimaryKeyConstraint
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

# class NewService(Base):
#     __tablename__ = 'new_services'

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     title = Column(String)
#     service_provider = Column(String)
#     last_consent_date = Column(DateTime)
#     third_party_sharing = Column(Boolean)
#     created_at = Column(DateTime)
#     updated_at = Column(DateTime)

#     def __repr__(self):
#         return f"<Service(name={self.title}, service_provider={self.service_provider}, last_consent_date={self.last_consent_date}, shares_with_third_party={self.third_party_sharing} created_at={self.created_at}, updated_at={self.updated_at})>"
    
# class ActiveService(Base):
#     __tablename__ = 'active_services'

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     title = Column(String)
#     service_provider = Column(String)
#     last_consent_date = Column(DateTime)
#     third_party_sharing = Column(Boolean)
#     created_at = Column(DateTime)
#     updated_at = Column(DateTime)

#     def __repr__(self):
#         return f"<Service(name={self.title}, service_provider={self.service_provider}, last_consent_date={self.last_consent_date}, shares_with_third_party={self.third_party_sharing} created_at={self.created_at}, updated_at={self.updated_at})>"
    
# class RevokedDataProvider(Base):
#     __tablename__ = 'revoked_data_providers'

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     service_id = Column(Integer, ForeignKey('new_services.id'))
#     provider = Column(String)
#     provided_data = Column(String)
#     revoked_at = Column(DateTime)
#     started_at = Column(DateTime)
#     created_at = Column(DateTime)
#     updated_at = Column(DateTime)

#     def __repr__(self):
#         return f"<RevokedDataProvider(service_id={self.service_id}, provider={self.provider}, provided_data={self.provided_data}, revoked_at={self.revoked_at}, started_at={self.started_at}, created_at={self.created_at}, updated_at={self.updated_at})>"
 
# class ShareRequest(Base):
#     __tablename__ = 'share_requests'

#     id = Column(Integer, primary_key=True)
#     request_form_id = Column(String)

#     service_id = Column(Integer, ForeignKey('new_services.id'))
#     third_party_sharing = Column(Boolean)
#     started_at = Column(DateTime)
#     ending_at = Column(DateTime, nullable=True)
#     revoked_at = Column(DateTime, nullable=True)
#     sharing_status = Column(String)
#     purpose = Column(String)
#     request_cycle=Column(String)
#     data_retain_period=Column(String)
#     scopes = Column(String)
#     created_at = Column(DateTime)
#     updated_at = Column(DateTime)

#     def __repr__(self):
#         return f"<ShareRequest(request_form_id={self.request_form_id}, service_id={self.service_id}, third_party_sharing={self.third_party_sharing}, started_at={self.started_at}, ending_at={self.ending_at}, revoked_at={self.revoked_at}, sharing_status={self.sharing_status}, purpose={self.purpose}, request_cycle={self.request_cycle}, data_retain_period={self.data_retain_period}, scopes={self.scopes}, created_at={self.created_at}, updated_at={self.updated_at})>"
    

# class DataProvider(Base):
#     __tablename__ = 'data_providers'

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     primary_key = Column(Integer, primary_key=True)
#     provider_name = Column(String)
#     service_id = Column(Integer, ForeignKey('new_services.id'))
#     share_request_id = Column(Integer, ForeignKey('share_requests.id'))
#     created_at = Column(DateTime)
#     updated_at = Column(DateTime)
    

#     __table_args__ = (
#         PrimaryKeyConstraint('service_id', 'sharing_request_id'),
#     )

#     def __repr__(self):
#         return f"<DataProvider(provider_name={self.provider_name}, service_id={self.service_id}, share_request_id={self.share_request_id}, created_at={self.created_at}, updated_at={self.updated_at})>"
    