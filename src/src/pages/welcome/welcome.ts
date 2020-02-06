import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {ConfigurationScreen} from "../configScreen/configScreen";

declare var Capacitor
const { WifiEapConfigurator } = Capacitor.Plugins;

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage  {

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {

  }
 
 /* async configure() {
   await WifiEapConfigurator.configureAP({ssid: "eduroam", username: "xxxx@alu.upo.es", password: "xxxx", eap: 21, servername: "", auth: 5, anonymous: "", 
    caCertificate: 
    "MIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSQwIgYDVQQDExtEaWdpQ2VydCBBc3N1cmVkIElEIFJvb3QgQ0EwHhcNMDYxMTEwMDAwMDAwWhcNMzExMTEwMDAwMDAwWjBlMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSQwIgYDVQQDExtEaWdpQ2VydCBBc3N1cmVkIElEIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCtDhXO5EOAXLGH87dg+XESpa7cJpSIqvTO9SA5KFhgDPiA2qkVlTJhPLWxKISKityfCgyDF3qPkKyK53lTXDGEKvYPmDI2dsze3Tyoou9q+yHyUmHfnyDXH+Kx2f4YZNISW1/5WBg1vEfNoTb5a3/UsDg+wRvDjDPZ2C8Y/igPs6eD1sNuRMBhNZYW/lmci3Zt1/GiSw0r/wty2p5g0I6QNcZ4VYcgoc/lbQrISXwxmDNsIumH0DJaoroTghHtORedmTpyoeb6pNnVFzF1roV9Iq4/AUaG9ih5yLHa5FcXxH4cDrC0kqZWs72yl+2qp/C3xag/lRbQ/6GW6whfGHdPAgMBAAGjYzBhMA4GA1UdDwEB/wQEAwIBhjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRF66Kv9JLLgjEtUYunpyGd823IDzAfBgNVHSMEGDAWgBRF66Kv9JLLgjEtUYunpyGd823IDzANBgkqhkiG9w0BAQUFAAOCAQEAog683+Lt8ONyc3pklL/3cmbYMuRCdWKuh+vy1dneVrOfzM4UKLkNl2BcEkxY5NM9g0lFWJc1aRqoR+pWxnmrEthngYTffwk8lOa4JiwgvT2zKIn3X/8i4peEH+ll74fg38FnSbNd67IJKusm7Xi+fT8r87cmNW1fiQG2SVufAQWbqz0lwcy2f8Lxb4bG+mRo64EtlOtCt/qMHt1i8b5QZ7dsvfPxH2sMNgcWfzd8qVttevESRmCD1ycEvkvOl77DZypoEd+A5wwzZr8TDRRu838fYxAe+o0bJW1sj6W3YQGx0qMmoRBxna3iw/nDmVG3KwcIzi7mULKn+gpFL6Lw8g=="})

  }*/

   async configure() {
   await WifiEapConfigurator.configureAP({ssid: "eduroam", username: "xxxx@alu.upo.es", password: "xxxx", eap: 13, servername: "", auth: null, 
   anonymous: "f62f2169-d246-432d-90eb-743284a7bd83@demo.eduroam.no", 
    caCertificate: 
    "MIID6DCCAtCgAwIBAgIBADANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0EwHhcNMTkxMDI4MjIzNzU5WhcNMjkxMDI1MjIzNzU5WjBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCnk9ui7c00MjJt5nedAj0wdIOvTa3HtYdFeziE2a3i32TaxZEuB0ioYw9Od7rkdzo9IW3Q5aQbeSFSws/tPWmW36XtxTgZ9LEYkb9JzLxCLeeBzDtMHkk0hGpHRPqsHG9yKGNVg3tNv0BY81MzxQQNZybyWFCbkbE+9I67e48MonwlNVz6LMUMgi4P2os55JiRR0wvOETQmi2f/o60lxBsq4M6E9XMIPKQgoZ+La/Aov12dYlLEWdK7X17i6iLBIMGljrWXBDXkkYaxbIeoIt8EQr+z96WcLbwoCRfesCsJN2kEN4QZMzt79039xCyuZ1ah12muTIZSrMugE/EjrqVAgMBAAGjgcAwgb0wHQYDVR0OBBYEFOivI6HDBGDcOr7hCUEdQMXQ3lQ7MH4GA1UdIwR3MHWAFOivI6HDBGDcOr7hCUEdQMXQ3lQ7oVqkWDBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0GCAQAwDwYDVR0TAQH/BAUwAwEB/zALBgNVHQ8EBAMCAYYwDQYJKoZIhvcNAQELBQADggEBADQk5KyfrOONYweGWPvCS+zkLsjtPW84NHu6MQCqZ4shG7JUgpU5Un9MZvLdu2EN9rHQN0koy/fJy7sdT1fJNNq8pN0M/s/+IC4qNebrDXqCHiP8iI+oM3xRNxUSdm85MO/Lswc7h/4h06X7amUv5LOzauhQSXDj6TVNcQfnxWvXGPBPil4bXdXpfs8WhJPvLXd88YV8lA/CzSqc7skJc/ARRTKr6QcIKEXBNiU+eJII33/ZRuYXMfHvdT/1M2k7UgFTU9igXxkXsnihRii+kT64934D/vXkvSJYZcCKV4BoysYUVPoQ1nijXJeCJh8XvFdeT0p6HXdba68o2XGL4HE",
   clientCertificate:'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',
    passPhrase:'5e3aa9cecb5e2'})

  }
  
  async networkAssociated() {
   await WifiEapConfigurator.isNetworkAssociated({ssid: "eduroam"})
  }

  async enableWifi() {
   await WifiEapConfigurator.enableWifi()
  }

  async navigateTo() {
      await this.navCtrl.push(ConfigurationScreen);
  }

  exitApp() {
    this.platform.exitApp();
  }
}
