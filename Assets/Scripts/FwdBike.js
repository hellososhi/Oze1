#pragma strict

var speed:float=0.7;
var spdx:float=1.0;
var ani:int=0;

function Start () {

}

function Update () {
	transform.position.z+=speed;
	ani++;
	ani=ani%5;
	if(ani==0){
		if(Input.GetKey("right")){
			if(transform.position.x<3512){
				transform.position.x+=5;
			}
		}
		if(Input.GetKey("left")){
			if(transform.position.x>3502){
				transform.position.x-=5;
			}
		}
	}
	if(transform.position.y<65){
			Application.LoadLevel("over");
	}
}