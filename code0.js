gdjs.SplashscreenCode = {};
gdjs.SplashscreenCode.GDcontrolsObjects1= [];
gdjs.SplashscreenCode.GDcontrolsObjects2= [];
gdjs.SplashscreenCode.GDNewObjectObjects1= [];
gdjs.SplashscreenCode.GDNewObjectObjects2= [];

gdjs.SplashscreenCode.conditionTrue_0 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashscreenCode.conditionTrue_1 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_1 = {val:false};


gdjs.SplashscreenCode.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "splashWait");
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "splashWait");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.SplashscreenCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.SplashscreenCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDNewObjectObjects1[i].setOpacity(gdjs.SplashscreenCode.GDNewObjectObjects1[i].getOpacity() - (10));
}
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition1IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7389428);
}
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "thebrightworld.ogg", true, 100, 1);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{



}


}; //End of gdjs.SplashscreenCode.eventsList0xb24c0


gdjs.SplashscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashscreenCode.GDcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects1.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects2.length = 0;

gdjs.SplashscreenCode.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['SplashscreenCode'] = gdjs.SplashscreenCode;
