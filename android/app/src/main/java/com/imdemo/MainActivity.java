package com.imdemo;

import com.reactnativenavigation.controllers.SplashActivity;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
}