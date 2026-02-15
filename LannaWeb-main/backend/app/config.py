import os
from dotenv import load_dotenv
from typing import List

# โหลด .env เฉพาะตอน local เท่านั้น
if os.path.exists(".env"):
    load_dotenv()


class Settings:
    # ========================
    # 🌍 Environment
    # ========================
    ENV: str = os.getenv("ENV", "dev")
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"

    # ========================
    # 🗄 Database
    # ========================
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "sqlite:///./app.db"
    )

    # ========================
    # 🔐 JWT
    # ========================
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(
        os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)
    )

    REFRESH_TOKEN_EXPIRE_DAYS: int = int(
        os.getenv("REFRESH_TOKEN_EXPIRE_DAYS", 7)
    )

    # ========================
    # 🔑 Google OAuth
    # ========================
    GOOGLE_CLIENT_ID: str = os.getenv("GOOGLE_CLIENT_ID", "")
    GOOGLE_CLIENT_SECRET: str = os.getenv("GOOGLE_CLIENT_SECRET", "")
    GOOGLE_REDIRECT_URI: str = os.getenv("GOOGLE_REDIRECT_URI", "")

    # ========================
    # 🗺 Google Maps
    # ========================
    GOOGLE_MAPS_API_KEY: str = os.getenv("GOOGLE_MAPS_API_KEY", "")

    # ========================
    # 🤖 AI Model
    # ========================
    MODEL_PATH: str = os.getenv(
        "MODEL_PATH",
        "app/ml/MobileNetV3-Large.pt"
    )

    # ========================
    # 📂 File Upload
    # ========================
    UPLOAD_FOLDER: str = os.getenv("UPLOAD_FOLDER", "uploads/")
    MAX_UPLOAD_SIZE_MB: int = int(
        os.getenv("MAX_UPLOAD_SIZE_MB", 10)
    )

    # ========================
    # 🌐 CORS
    # ========================
    ALLOWED_ORIGINS: List[str] = os.getenv(
        "ALLOWED_ORIGINS",
        "*"
    ).split(",")

    # ========================
    # 🧾 Logging
    # ========================
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")

    # ========================
    # 🔎 Validate Important Config
    # ========================
    def validate(self):
        if not self.SECRET_KEY:
            raise ValueError("SECRET_KEY is required in production environment.")


settings = Settings()
settings.validate()
