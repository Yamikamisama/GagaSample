# username = CLIENT.user.username
# james = TwitterUser.create(username: username)
# CLIENT.user_timeline.each do |tweet|
#   james.tweets.create(text: tweet.text)
# end


# [*1..10].each do |old|
#   [*11..20].each do |new|
#     puts "#{old} ==> #{new}"
#   end
# end
p [*1..10].zip([*11..20])
