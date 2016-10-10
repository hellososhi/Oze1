#pragma strict

function Start () {

}

function Update () {
	if(transform.position.z>906){
		Application.LoadLevel("crear");
	}
}