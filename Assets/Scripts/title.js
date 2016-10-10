#pragma strict

function OnGUI(){
	if(GUI.Button(Rect(300,100,200,30),"Game Start")){
		Application.LoadLevel("main");
	}
}
