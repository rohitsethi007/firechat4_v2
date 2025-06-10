import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FriendPipe } from '../pipes/friend';
import { ConversationPipe } from '../pipes/conversation';
import { GroupPipe } from '../pipes/group';
import { SearchPipe } from '../pipes/search';
import { DateFormatPipe } from '../pipes/date';
import { UserImagePipe } from '../pipes/user-image.pipe';
import { FirebaseDatePipe } from '../pipes/firebase-date.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FriendPipe,
        ConversationPipe,
        GroupPipe,
        SearchPipe,
        DateFormatPipe,
        UserImagePipe,
        FirebaseDatePipe
    ],
    exports: [
        FriendPipe,
        ConversationPipe,
        GroupPipe,
        SearchPipe,
        DateFormatPipe,
        UserImagePipe,
        FirebaseDatePipe
    ],
    providers: [
        DatePipe
    ]
})

export class SharedModule { }