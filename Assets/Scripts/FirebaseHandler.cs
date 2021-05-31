using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

public class FirebaseHandler : MonoBehaviour
{
    [SerializeField] Text txtNotify;

    [DllImport("__Internal")]
    public static extern void GetJSON(string path, string objectName, string callBack, string fallBack);

    private void Start()
    {
        GetJSON("example", gameObject.name, "OnRequestSuccess", "OnRequestFailed");
    }

    private void OnRequestSuccess(string data)
    {
        txtNotify.text = data;
    }

    private void OnRequestFailed(string error)
    {
        txtNotify.text = error;
    }

}
