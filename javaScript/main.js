/* Event Listener -> 이벤트 핸들러 */
document.getElementById('idAlert').addEventListener('click', function(){
document.getElementById('title').innerHTML = '아이디를 입력하세요.';
document.getElementById('pop-box').style.display = 'block';
});

document.getElementById('closeAlert').addEventListener('click', function(){
document.getElementById('pop-box').style.display = 'none';
});

document.getElementById('passAlert').addEventListener('click', function(){
document.getElementById('title').innerHTML = '비밀번호를 입력하세요.';
document.getElementById('pop-box').style.display = 'block';
});