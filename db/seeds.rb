# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('posts')

guest = User.create(username: "guest", password: "guestguest", email: "guest@guest.com", title: "Demo Account", description: "Play Around!")

user1 = User.create(username: "julesdrawz", password: "julesdrawz", email: "julesdrawz@trickstr.com", title: "", description: "")
file = EzDownload.open('https://api.tumblr.com/v2/blog/julesdrawz.tumblr.com/avatar/512')
user1.avatar.attach(io: file, filename: '512')

user2 = User.create(username: "loish", password: "loishloish", email: "loish@trickstr.com", title: "loish blog", description: "artblog of lois van baarle")
file = EzDownload.open('https://api.tumblr.com/v2/blog/loish.tumblr.net/avatar/512')
user2.avatar.attach(io: file, filename: '512')

user3 = User.create(username: "vetyr", password: "vetyrvetyr", email: "vetyr@trickstr.com", title: "V's art", description: "Syd Mills. Feel free to ask whatever.")
file = EzDownload.open('https://api.tumblr.com/v2/blog/vetyr.tumblr.com/avatar/512')
user3.avatar.attach(io: file, filename: '512')

user4 = User.create(username: "twiggymcbones", password: "twiggymcbones", email: "twiggymcbones@trickstr.com", title: "Fiddlesticks", description: "Nonsense only")
file = EzDownload.open('https://api.tumblr.com/v2/blog/twiggymcbones.tumblr.com/avatar/512')
user4.avatar.attach(io: file, filename: '512')

user5 = User.create(username: "kaimyo", password: "kaimyokaimyo", email: "kaimyo@trickstr.com", title: "I like to draw", description: "J.J//22/Romania//Artist// INTJ")
file = EzDownload.open('https://api.tumblr.com/v2/blog/kaimyo.tumblr.com/avatar/512')
user5.avatar.attach(io: file, filename: '512')



# id: 1
post1 = Post.create(user_id: 5, post_type: "photo", description: "Hey guys! check out my new Ball Python!")
file = EzDownload.open('https://78.media.tumblr.com/c9a915a1217eb5e010cd09c8ca54e0ff/tumblr_pdj0g7rIST1r8wa9zo3_640.jpg')
post1.contents.attach(io: file, filename: 'tumblr_pdj0g7rIST1r8wa9zo3_640.jpg')

# id: 2
post1 = Post.create(user_id: 4, post_type: "photo", description: "Immortal Hecate")
file = EzDownload.open('https://78.media.tumblr.com/323eb4c447e825c11df1683c5d7ac8b8/tumblr_pdkmulRFf91v2z03bo1_1280.png')
post1.contents.attach(io: file, filename: 'tumblr_pdkmulRFf91v2z03bo1_1280.png')

# id: 3
post1 = Post.create(user_id: 6, post_type: "photo", description: "I was baffled yesterday to the amount of notes and support I received on one of my works so I would like to thank you all and welcome to the new followers!")
file = EzDownload.open('https://78.media.tumblr.com/03f763300a204b8f1f5034da2a7ecfc2/tumblr_pdd56pWOWj1uxf2ypo1_1280.png')
post1.contents.attach(io: file, filename: 'tumblr_pdd56pWOWj1uxf2ypo1_1280.png')

# id: 4
post1 = Post.create(user_id: 2, post_type: "photo", description: "This Month I’m taking Pokemon and pet commissions in this art style. If anyone is interested contact me at julesdrawz@gmail.com")
file = EzDownload.open('https://78.media.tumblr.com/1a7a65cd338127c5940bc80a6e0fd701/tumblr_pdkh1hLx1G1vboqg5o1_1280.jpg')
post1.contents.attach(io: file, filename: 'tumblr_pdkh1hLx1G1vboqg5o1_1280.jpg')

# id: 5
post1 = Post.create(user_id: 3, post_type: "photo", description: "New painting! Been working on this for too long and changed my approach a bunch of times, so I'm glad I finally managed to finish it :)")
file = EzDownload.open('https://78.media.tumblr.com/92401ba6ac866c968e3b58969394c306/tumblr_pdlqoptAeu1qa9abso1_1280.png')
post1.contents.attach(io: file, filename: 'tumblr_pdlqoptAeu1qa9abso1_1280.png')

# id: 6
post2 = Post.create(user_id: 4, post_type: "photo", description: "Sweets with toppings :) anyone crazy enough to want a print, you’re in luck")
file = EzDownload.open('https://78.media.tumblr.com/061cd991500c4b7d9b5c4a15940e9763/tumblr_pd24f9IDMI1v2z03bo1_1280.png')
post2.contents.attach(io: file, filename: 'tumblr_pd24f9IDMI1v2z03bo1_1280.png')

# id: 7
post2 = Post.create(user_id: 3, post_type: "photo", description: "new prints and products in my society6 shop, just in time for 30% off! check it out ~")
file = EzDownload.open('https://78.media.tumblr.com/f055116cada786b6367bb4e2ec049f95/tumblr_pdev4uN2MF1qa9abso1_1280.png')
post2.contents.attach(io: file, filename: 'tumblr_pdev4uN2MF1qa9abso1_1280.png')

# id: 8
post2 = Post.create(user_id: 5, post_type: "photo", description: "Aquaman, protector of the seven seas!")
file = EzDownload.open('https://78.media.tumblr.com/6468e1ca7f38bc8f516a6b503bf3da27/tumblr_pceavd89bf1r8wa9zo1_1280.jpg')
post2.contents.attach(io: file, filename: 'tumblr_pceavd89bf1r8wa9zo1_1280.jpg')

# id: 9
post2 = Post.create(user_id: 2, post_type: "photo", description: "I’m getting towards the end of my Y playthrough. This is what my team looks like now.")
file = EzDownload.open('https://78.media.tumblr.com/fa6b4bae2b83879477ec30bd63d5a725/tumblr_pdivnyiJC81vboqg5o1_1280.jpg')
post2.contents.attach(io: file, filename: 'tumblr_pdivnyiJC81vboqg5o1_1280')

# id: 10
post2 = Post.create(user_id: 6, post_type: "photo", description: "Didn't upload this at first cause i couldn't decide on a background ^^’")
file = EzDownload.open('https://78.media.tumblr.com/0b0ab839a6f7a5692a37f4cd68b8fc35/tumblr_pclpyf0OPB1uxf2ypo1_1280.png')
post2.contents.attach(io: file, filename: 'tumblr_pclpyf0OPB1uxf2ypo1_1280.png')

# id: 11
post3 = Post.create(user_id: 3, post_type: "photo", description: "What can I say? I find it relaxing to draw hair that looks like roots and/or sweet potatoes :)")
file = EzDownload.open('https://78.media.tumblr.com/4c732663b687198babf6bcd7994d99af/tumblr_pd7dgfdxWf1qa9abso2_1280.jpg')
post3.contents.attach(io: file, filename: 'tumblr_pd7dgfdxWf1qa9abso2_1280.jpg')

# id: 12
post3 = Post.create(user_id: 5, post_type: "photo", description: "2018 Harry and Hermione, in which I imagine they have finally fallen deeply in love and the Ministry of Magic has fully embraced a mid-century modern aesthetic. And also Hawaiian shirts are in!")
file = EzDownload.open('https://78.media.tumblr.com/95a0884d98f5383bc264ee6ca5d0c9ea/tumblr_pc30s9vzfe1r8wa9zo1_1280.jpg')
post3.contents.attach(io: file, filename: 'tumblr_pc30s9vzfe1r8wa9zo1_1280.jpg')

# id: 13
post3 = Post.create(user_id: 6, post_type: "photo", description: "Wanted to draw Tsuyu and add some flowers for symbolism, also cause i am bad at drawing flowers and this is good practice ")
file = EzDownload.open('https://78.media.tumblr.com/e02a322da0d0cb05133b870ce1e759f1/tumblr_pccae8rkGP1uxf2ypo1_1280.png')
post3.contents.attach(io: file, filename: 'tumblr_pccae8rkGP1uxf2ypo1_1280.png')

# id: 14
post3 = Post.create(user_id: 2, post_type: "photo", description: "Pyroar")
file = EzDownload.open('https://78.media.tumblr.com/4277f61a265622ee83da977e5a2876f6/tumblr_pd9oe8wSti1vboqg5o1_1280.jpg')
post3.contents.attach(io: file, filename: 'tumblr_pd9oe8wSti1vboqg5o1_1280.jpg')

# id: 15
post3 = Post.create(user_id: 4, post_type: "photo", description: "The First Painter")
file = EzDownload.open('https://78.media.tumblr.com/0100ef0d3b5f33aa96a4b2ef9148cde1/tumblr_pcr3y08BV61v2z03bo1_1280.png')
post3.contents.attach(io: file, filename: 'tumblr_pcr3y08BV61v2z03bo1_1280.png')

like = Like.create(user_id: 1, post_id: 15)
like = Like.create(user_id: 1, post_id: 12)
like = Like.create(user_id: 1, post_id: 2)
like = Like.create(user_id: 1, post_id: 5)

like = Like.create(user_id: 2, post_id: 13)
like = Like.create(user_id: 2, post_id: 11)
like = Like.create(user_id: 2, post_id: 8)
like = Like.create(user_id: 2, post_id: 1)

like = Like.create(user_id: 3, post_id: 13)
like = Like.create(user_id: 3, post_id: 11)
like = Like.create(user_id: 3, post_id: 8)
like = Like.create(user_id: 3, post_id: 1)

like = Like.create(user_id: 4, post_id: 13)
like = Like.create(user_id: 4, post_id: 11)
like = Like.create(user_id: 4, post_id: 8)
like = Like.create(user_id: 4, post_id: 1)

like = Like.create(user_id: 5, post_id: 13)
like = Like.create(user_id: 5, post_id: 11)
like = Like.create(user_id: 5, post_id: 8)
like = Like.create(user_id: 5, post_id: 1)

like = Like.create(user_id: 6, post_id: 13)
like = Like.create(user_id: 6, post_id: 11)
like = Like.create(user_id: 6, post_id: 8)
like = Like.create(user_id: 6, post_id: 1)
