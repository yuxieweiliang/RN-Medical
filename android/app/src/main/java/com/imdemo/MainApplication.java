package com.imdemo;
import android.app.Application;
import com.facebook.react.ReactApplication;
import com.syan.agora.AgoraPackage;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.netease.im.RNNeteaseImPackage;
import com.horcrux.svg.SvgPackage;
import com.netease.im.RNNeteaseImPackage;
import cn.jiguang.imui.messagelist.ReactIMUIPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import cn.qiuxiang.react.amap3d.AMap3DPackage;

import me.ele.dodo.AMapLocationReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.netease.im.IMApplication;

import java.util.Arrays;
import java.util.List;
import cn.jpush.reactnativejpush.JPushPackage;

public class MainApplication extends NavigationApplication {

    private boolean SHUTDOWN_TOAST = true;
    private boolean SHUTDOWN_LOG = true;

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new AgoraPackage(),
            new SvgPackage(),
            new RNNeteaseImPackage(),
            new ReactIMUIPackage(),
            new PickerPackage(),
						new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG),
            new AMap3DPackage(),
            new AMapLocationReactPackage(),
            new MPAndroidChartPackage(),
            new VectorIconsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }


    @Override
    public void onCreate() {
        super.onCreate();
        //new IMApplication.MiPushConfig("appId","appKey","pushname")
        IMApplication.init(this, MainActivity.class, R.drawable.ic_stat_notify_msg, null
        );

        SoLoader.init(this, /* native exopackage */ false);
    }
}
