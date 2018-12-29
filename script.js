var tl = new TimelineLite;
var sl = new TimelineLite;
var slides = [
'url(https://www.zegna.ru/content/dam/Zegna/FW17/elements-of-man/black-and-white-photographic-representation-of-integrity_mobile.jpg)',
'url(http://www.spletnik.ru/img/__post/a5/a53d7705c8d2157a4b07b0c87474fbb8_196.jpg)',
'url(https://www.factroom.ru/wp-content/uploads/2017/02/Depositphotos_133212280_l-2015-730x462.jpg)'
], i=1, slider = document.querySelector('.slider'),
// next = document.querySelector('.arrows')[0], prev = document.querySelector('.arrows')[1];
footer = document.querySelector('.footer.likes').children;
tl.set('h2, a.store', {rotationX:90, y:-30, opacity: 0 });
tl.set('.slider', {width:'40%', css:{backgroundImage: 'url(https://www.zegna.ru/content/dam/Zegna/FW17/elements-of-man/black-and-white-photographic-representation-of-integrity_mobile.jpg)'}});
tl.set('.prime-button', {marginLeft:'-7vw'});
tl.set(footer, {opacity: 0, y:-10});

tl.to('h2', 2, {rotationX:0, y:10, opacity: 1, ease:  Expo.easeInOut});
tl.to('a.store', 1, {rotationX:0, y:0, opacity: 1, ease:  Expo.easeInOut});
tl.staggerTo(footer, 1.5, {opacity:1, y:0}, 0.2);


tl.staggerTo(footer, 1.5, {opacity:0, y:-10}, 0.2, '+=3');
// tl.to('.prime-button', 1, {x:'10.5vw'});
tl.to('.slider', 1, {width:'100%'}, '-=1');
tl.to('h2, a.store', 1, {rotationX:90, y:-30, opacity: 0 });
function next(){
	if(i === 3){
		i=0;
	}
	slider.style.backgroundImage = slides[i++];
	// return sl.fromTo('.slider', 1, { css:{background: slides[i]}},{ css:{background: slides[i++]}});

}
function prev(){
	if(i === -1){
		i=2;
		}
	slider.style.backgroundImage = slides[i--];
	// return sl.to('.slider', 1, { css:{background: slides[i]}},{ css:{background: slides[i--]}});
}






