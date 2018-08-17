AVATARS = [
  'https://imgur.com/jnGiG1S.jpeg',
  'https://i.imgur.com/PDkdrm6.png',
  'https://i.imgur.com/QtFQt8p.png',
  'https://i.imgur.com/piyqSHU.png',
  'https://i.imgur.com/aEr4I1D.png',
  'https://i.imgur.com/08sSlrI.png',
  'https://i.imgur.com/klaH0DO.png',
  'https://i.imgur.com/lzJzuN2.png',
  'https://i.imgur.com/3nhqo4F.png',
  'https://i.imgur.com/OpW7qCd.png'
]

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
    foreign_key: :follower_id,
    class_name: 'Follow'

  has_many :followers,
    foreign_key: :user_id,
    class_name: 'Follow'

  after_initialize :ensure_user_avatar
  has_one_attached :avatar;

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email);
    (user && user.is_password?(password)) ? user : nil
  end

  def ensure_user_avatar
    if !self.avatar.attached?
      require 'open-uri'

      self.avatar.attach(io: open(AVATARS.sample), filename: 'default')
    end
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
