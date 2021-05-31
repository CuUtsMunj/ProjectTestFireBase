mergeInto(LibraryManager.library, {

  GetJSON: function (path, objectName, callBack, fallBack) {
 
    var parsedPath = Pointer_stringify(path);
    var parsedObjectName = Pointer_stringify(objectName);
    var parsedCallBack = Pointer_stringify(callBack);
    var parsedFallBack = Pointer_stringify(fallBack);

    try
    {

     firebase.database().ref(parsedPath).once('value').then(function(snapshot)
    {
       unityInstance.Module.SendMessage(parsedObjectName,parsedCallBack,JSON.stringify(snapshot.val()));
    });

    }
    catch(error)
    {
    unityInstance.Module.SendMessage(parsedObjectName,parsedFallBack,"There was an error:" + error.message);
    }

   

  }

});