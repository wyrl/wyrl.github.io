$(document).ready(function(){
	var skills = ['Java', 'C#', 'PHP', 'Python', 'C/C++', 'JQuery', 'MySQL', 'HTML5', 'Javascript', 'CSS3', 'Arduino'];
	var descriptions = [
		'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.',
		'C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		'PHP: Hypertext Preprocessor is a server-side scripting language designed for Web development, but also used as a general-purpose programming language.',
		'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.',
		'C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
		'jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the permissive MIT License.',
		'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
		'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard.',
		'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
		'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.'		
	];
	$('img.border').hover(function() {
		$(this).addClass('border-primary');
	},
	function(){
		$(this).removeClass('border-primary');
	});
	var countPositionX = 0;
	var countPositionY = 0;
	$('a').click(function(){
		var index = $(this).attr('index');
		var imgEl = $(this).find('img.border');
		imgEl.removeClass('border');
		imgEl.removeClass('border-primary');
		var img = $(this).html();

		var f = $('<div>'+ 
					'<div class="content">' + 
						'<div class="card">' + img + '</div>' +
						'<div class="card-header">' +
							'<h4 class="card-title"><b>'+ skills[index] +'</b></h4>' +
						'</div>' +
						'<div class="card-body">' +
							'<p class="card-text">'+ descriptions[index] +'</p>' +
						'</div>' +
					'</div>' +
				'</div>');
		$('#forms').append(f);
		f.winform();
		f.width(350);
		f.height(500);
		f.animate({
			top: countPositionY,
			left: countPositionX
		}, 'fast');
		$(this).hide();
		if(countPositionY <= 100){
			countPositionY = countPositionY + 50;
		}
		else
			countPositionY = 0;
		countPositionX = countPositionX + 50;
	});
});