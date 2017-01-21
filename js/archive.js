

var channelName = "Kevin Bryant";

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			//forUsername: channelName,
			id: 'UC9Tpuls6GnhFsPNL-9fKktw',
			key: 'AIzaSyDnR5Y761wjMiWQc1YPMXPhvAlS4kw_m-s'},
			function(data){
				$.each(data.items, function(i, item) {
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				})	
		}
	);

	function getVids(pid){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
			playlistId: pid,
			key: 'AIzaSyDnR5Y761wjMiWQc1YPMXPhvAlS4kw_m-s'},
			function(data){
				var output;
				$.each(data.items, function(i, item) {
					console.log(item);
					vidTitle = item.snippet.title;
					videoId = item.snippet.resourceId.videoId;

					output = '<li><iframe src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;showinfo=0"></iframe></li>';

					//append to results
					$('#results').append(output);
				})	
		})
	}
});