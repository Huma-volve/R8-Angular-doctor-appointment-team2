import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notification } from './notification/notification';
import { ProfilePopup } from './profile-popup/profile-popup';
import { SettingPopup } from './setting-popup/setting-popup';
import { PasswordSetting } from './password-setting/password-setting';
import { Payment } from './payment/payment';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component:Home },
    {path:'notifications',component:Notification},
    {path:'profile-popup',component:ProfilePopup},
    {path:'setting-popup',component:SettingPopup},
    {path:'password-management',component:PasswordSetting},
    {path:'payment',component:Payment},
    {path:'privacy-policy',component:PrivacyPolicy}

];
