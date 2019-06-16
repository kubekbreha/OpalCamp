from instapy import InstaPy
insta_username = ''
insta_password = ''
dont_like = ['terrible', 'horrible']
ignore_words = ['ugly', 'pain', 'punish']
friend_list = ['friend1', 'friend2', 'friend3']
bot = InstaPy(username=insta_username, password=insta_password, selenium_local_session=False)
bot.set_selenium_remote_session(selenium_url='http://selenium:4444/wd/hub')
bot.login()
bot.set_relationship_bounds(enabled=True,
  potency_ratio=-1.21,
  delimit_by_numbers=True,
  min_followers=40,
  min_following=40)
bot.set_do_comment(True, percentage=20)
bot.set_comments([u':thumbsup:', u':heart_eyes:', u':kissing_heart:', u':heart:', u':two_hearts:', u':smiley:'])
bot.set_dont_include(friend_list)
bot.set_dont_like(dont_like)
bot.set_ignore_if_contains(ignore_words)
bot.like_by_tags(['dogsofinstagram', 'dog', 'dogs', 'spoodle', 'puppies', 'puppy', 'puppylove', 'puppiesofinstagram', 'dogoftheday', 'instapuppy', 'ilovemydog', 'doglover', 'pup', 'puppygram', 'puppyoftheday', 'bestwoof', 'instagramdogs', 'dogsofig', 'lovedogs', 'doggy', 'doglife', 'doglovers', 'dogslife'], amount=100)
bot.end()
