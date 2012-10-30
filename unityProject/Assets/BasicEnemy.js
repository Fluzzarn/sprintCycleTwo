#pragma strict

var direction = Vector3(-1,0,0);
 var startTime : int;
var hero : GameObject;

function Awake() {

   
    startTime = Time.time;
    
     hero = GameObject.Find("hero"); 

}

function Update () {


    if(isHeroClose())
    {
    transform.position.x = Mathf.Lerp( transform.position.x, hero.transform.position.x, Time.deltaTime);
    }
    else
    {
        moveBackAndForth();
    }

}



function isHeroClose()
{
   if(Vector3.Distance(transform.position,hero.transform.position) <= 3)
   {
     return true;
   }
   else
   {
     return false;
   }
 

}

function moveBackAndForth()
{
    	transform.Translate(direction * Time.deltaTime,Space.World);
	
	
	if((Time.time - startTime) >= 3)
	{
	 direction = -direction;
	 startTime = Time.time;
	}


}