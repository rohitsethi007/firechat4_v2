import { Component, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent {
  @Input() postType: string;

  private generalEmojis = [
    { icon: './assets/icon/smile.svg', value: 'smile' },
    { icon: './assets/icon/wink.svg', value: 'wink' },
    { icon: './assets/icon/sad.svg', value: 'sad' },
    { icon: './assets/icon/love.svg', value: 'love' },
    { icon: './assets/icon/haha.svg', value: 'haha' },
    { icon: './assets/icon/cool.svg', value: 'cool' },
    { icon: './assets/icon/hug.svg', value: 'hug' }
  ];

  private eventEmojis = [
    { icon: './assets/icon/smile.svg', value: 'smile' },
    { icon: './assets/icon/wink.svg', value: 'wink' },
    { icon: './assets/icon/sad.svg', value: 'sad' },
    { icon: './assets/icon/love.svg', value: 'love' },
    { icon: './assets/icon/haha.svg', value: 'haha' },
    { icon: './assets/icon/cool.svg', value: 'cool' },
    { icon: './assets/icon/hug.svg', value: 'hug' }
  ];

  constructor(
    private popoverCtrl: PopoverController,
    private navParams: NavParams
  ) {
    this.postType = this.navParams.get('postType');
  }

  getEmojis() {
    return this.postType === 'event' ? this.eventEmojis : this.generalEmojis;
  }

  selectEmoji(emoji) {
    this.popoverCtrl.dismiss({
      emoji: emoji,
      post: this.navParams.get('post')
    });
  }
}
