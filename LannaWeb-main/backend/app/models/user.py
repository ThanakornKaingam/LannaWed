from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    email = Column(String, unique=True, nullable=False)

    # password hash
    password = Column(String, nullable=True)

    # Google OAuth
    google_id = Column(String, nullable=True)

    # role
    role = Column(String, default="user")

    # active account
    is_active = Column(Boolean, default=True)

    # verified email
    is_verified = Column(Boolean, default=False)

    # forgot password token
    reset_token = Column(String, nullable=True)

    # created time
    created_at = Column(DateTime, default=datetime.utcnow)
