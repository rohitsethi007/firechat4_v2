import { NgModule } from '@angular/core';
import { FriendPipe } from '../pipes/friend';
import { ConversationPipe } from '../pipes/conversation';
import { GroupPipe } from '../pipes/group';
import { SearchPipe } from '../pipes/search';
import { DateFormatPipe } from '../pipes/date';
import { PollPipe } from '../pipes/poll';
import { ResourcePipe } from '../pipes/resource';
import { ReversePipe } from '../pipes/reverse.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        FriendPipe,
        ConversationPipe,
        GroupPipe,
        SearchPipe,
        DateFormatPipe,
        PollPipe,
        ResourcePipe,
        ReversePipe
    ],
    exports: [
        FriendPipe,
        ConversationPipe,
        GroupPipe,
        SearchPipe,
        DateFormatPipe,
        PollPipe,
        ResourcePipe,
        ReversePipe
    ]
})

export class SharedModule { }