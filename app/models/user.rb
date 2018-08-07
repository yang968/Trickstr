class User < ApplicationRecord
  validates :username, :email, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  def find_by_credentials(email, password)
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
