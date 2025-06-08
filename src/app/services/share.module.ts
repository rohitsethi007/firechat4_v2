import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FriendPipe } from '../pipes/friend';
import { ConversationPipe } from '../pipes/conversation';
import { GroupPipe } from '../pipes/group';
import { SearchPipe } from '../pipes/search';
import { DateFormatPipe } from '../pipes/date';
import { PollPipe } from '../pipes/poll';
import { ResourcePipe } from '../pipes/resource';
import { ReversePipe } from '../pipes/reverse.pipe';
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
        PollPipe,
        ResourcePipe,
        ReversePipe,
        UserImagePipe,
        FirebaseDatePipe
    ],
    exports: [
        FriendPipe,
        ConversationPipe,
        GroupPipe,
        SearchPipe,
        DateFormatPipe,
        PollPipe,
        ResourcePipe,
        ReversePipe,
        UserImagePipe,
        FirebaseDatePipe
    ],
    providers: [
        DatePipe
    ]
})

export class SharedModule { }