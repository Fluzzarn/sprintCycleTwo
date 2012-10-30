#pragma strict

 var startDistance : Vector3;
 var direction = Vector3(-1,0,0);
 var startTime : int;


function Awake() {

    startDistance = transform.position;
    startTime = Time.time; 

}

function Update () {

	/*if(Vector3.Distance(startDistance,transform.position) >= 1)
	{
	    transform.Translate(Vector3(-1,0,0) * Time.deltaTime,Space.Self);
	
	}
	else //if(transform.position == startDistance)
	{
	    transform.Translate(Vector3.right * Time.deltaTime,Space.Self);
	   
	
	}*/
	
	transform.Translate(direction * Time.deltaTime,Space.World);
	
	
	if((Time.time - startTime) >= 1)
	{
	 direction = -direction;
	 startTime = Time.time;
	}

  
}