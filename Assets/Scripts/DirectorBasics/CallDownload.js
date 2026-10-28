//@input SceneObject parent
//@input int idToLoad 
//_________________________Director Setup_________________________//
script.subScene = new global.SubScene(script, script.parent);
script.subScene.OnStart = Start;
script.subScene.OnLateStart = OnLateStart;
script.subScene.OnStop = Stop;
script.subScene.SetUpdate(Update);
//__________________________Variables_____________________________//
//________Caller________//

const LoadingCloudAssetCaller = script.subScene.CreateCaller("loadingAssetEvent", null);

//________Listener________//
//________DelayEvent________//

//_________________________Director_Functions_____________________//
function Start() {}
function OnLateStart() {
  
  LoadingCloudAssetCaller.Call(script.idToLoad);
}
function Update() {}
function Stop() {}
//___________________________Functions__________________________//

//___________________________Animations_________________________//
