#pragma strict

function Start () {

}

function Update () {

    if(Input.GetButtonDown('e'))
    {
     Debug.Log("working");
     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y,transform.parent.transform.position.z - 10);
     transform.Rotate(0,180,0);
    
    }
    
    if(Input.GetButtonDown('q'))
    {
     Debug.Log("working");
     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y,transform.parent.transform.position.z + 10);
     transform.Rotate(0,180,0);
     
    
    }

	if(Input.GetButtonDown('2'))
	    {
	     Debug.Log("working");
	     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y + 10,transform.parent.transform.position.z);
	     transform.Rotate(90,0,0);
	     
	    
	    }


}