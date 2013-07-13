$(document).ready(function() {
  // $(".fancySelectBox").selectBox();
  slider();
  showSelectBox();
  suggest();
});

function showSelectBox() {
  $('input#url').focus(function() {
    $('select#resource').removeClass('hidden');
    $('#suggestion').text(suggestions['blogs']);
  });
}

function slider () {
  $('nav ul li a').click(function() {
    $('nav ul li').removeClass('active');
    $(this).parent().addClass('active');
  });
}

suggestions = {
  'blogs' : "Any blog post relevent to the page",
  'subscription_services' : "Add those website links which offer you to subscribe, this could also be a youtube channel",
  'tips' : "Tips n Tricks could be Coderwall protips which you find interesting or a even a blog post",
  'slides' : "You can add slides from speakerdeck.com or slideshare.net for now if you think we are missing something let us know",
  'qnas' : "Add good to read questions/answers from stackoverflow.com or quora.com",
  'screencasts' : "If you find a screencast you can link it here",
  'videos' : "You can add videos from youtube.com or vimeo.com for now if you think we are missing something let us know",
  'tweeters' : "Add people who tweet about this project, you can add them by adding link to their user profile",
  'noteworthies' : "This could be official website for the project, or websites related to the project and NOT blog posts"
}

function suggest() {
  $('#resource').change(function() {
    $('#suggestion').text(suggestions[$(this).val()]);
    console.log(suggestions[$(this).val()]);
  });
}
