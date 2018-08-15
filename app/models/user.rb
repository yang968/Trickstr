class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :username, length: { minimum: 1 }
  validates :password_digest, :session_token, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :posts

  has_many :likes
  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :follows,
    foreign_key: :user_id,
    class_name: 'Follow'

  has_many :followers,
    foreign_key: :follower_id,
    class_name: 'Follow'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email);
    (user && user.is_password?(password)) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
