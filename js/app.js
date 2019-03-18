const scrollH = document.documentElement.scrollHeight,
clientH = document.documentElement.clientHeight,
scrollUnit = (scrollH - clientH) / 100,
rootStyles = document.documentElement.style;
document.onscroll = function(){
	rootStyles.setProperty('--width', Math.round(scrollY / scrollUnit))
}







