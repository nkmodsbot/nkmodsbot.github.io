<body  style="background-color: #101112;">
 <style>
 .themi{
 color:white;
 text-align: center;
 }
 .mid{
 text-align: center;
 }
 .prebuttonv1 {
  background-color: #354bc4;
  border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
 }
 .theitem {
 background-color: #008CBA;
 }
 </style>
 <input type="button" class="prebuttonv1
 theitem" value="Redirect" style = "display:block" id="btnRedirect" onclick="DelayRedirect()" />
 <br />
 <br />
 <div class="themi" id="dvCountDown" style = "display:none">
 You will be redirected after <span id = "lblCount"></span>&nbsp;seconds.
 </div>
 <script type="text/javascript">
 function DelayRedirect() {
 var seconds = 5;
 var dvCountDown = document.getElementById("dvCountDown");
var lblCount = document.getElementById("lblCount");
var btnRedirect = document.getElementById("btnRedirect")
 dvCountDown.style.display = "block";
btnRedirect.style.display = "none"
 lblCount.innerHTML = seconds;
 setInterval(function () {
 seconds--;
 lblCount.innerHTML = seconds;
 if (seconds == 0) {
 dvCountDown.style.display = "none";
 window.location = "//www.aspsnippets.com/";
 }
 }, 1000);
 }
 </script>
 </body>
