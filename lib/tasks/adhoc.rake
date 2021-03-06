namespace :adhoc do

  desc "Update url for twitter profile images"
  task :update_twitter_profile_images_url => :environment do
    client = TweeterService.client
    Repository.all.each do |repository|
      repository.tweeters.each do |tweeter|
        username = tweeter.url.split('/').last
        puts username
        puts tweeter.thumbnail_url
        thumbnail_url = tweeter.thumbnail_url
        begin
          tweeter.thumbnail_url = client.user(username).profile_image_url.to_s
          sleep(0.5)
          tweeter.save! unless thumbnail_url == tweeter.thumbnail_url
        rescue Exception => e
          puts e.message
        end
        puts tweeter.thumbnail_url
      end
    end
  end
end
