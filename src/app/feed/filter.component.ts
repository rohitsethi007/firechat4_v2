// filter.component.ts
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  template: `
    <div class="filter-container">
      <!-- Header -->
      <div class="filter-header">
        <h4>Filter Content</h4>
        <ion-button fill="clear" size="small" (click)="resetFilters()" 
                    [disabled]="!hasActiveFilters()">
          <ion-icon slot="start" name="refresh-outline"></ion-icon>
          Reset
        </ion-button>
      </div>

      <!-- Content Type Section -->
      <div class="filter-section">
        <div class="section-header">
          <span class="title">Content Type</span>
          <span class="subtitle">{{selectedType !== 'all' ? '1 selected' : ''}}</span>
        </div>
        <div class="filter-chips content-types">
          <div class="filter-chip" 
               [class.active]="selectedType === 'all'"
               (click)="selectFilter('all')">
            <ion-icon name="apps-outline"></ion-icon>
            <span>All</span>
          </div>
          <div class="filter-chip" 
               [class.active]="selectedType === 'posts'"
               (click)="selectFilter('posts')">
            <ion-icon name="chatbubbles-outline"></ion-icon>
            <span>Posts</span>
          </div>
          <div class="filter-chip" 
               [class.active]="selectedType === 'events'"
               (click)="selectFilter('events')">
            <ion-icon name="calendar-outline"></ion-icon>
            <span>Events</span>
          </div>
          <div class="filter-chip" 
               [class.active]="selectedType === 'resources'"
               (click)="selectFilter('resources')">
            <ion-icon name="library-outline"></ion-icon>
            <span>Resources</span>
          </div>
        </div>
      </div>

      <!-- Groups Section -->
      <div class="filter-section">
        <div class="section-header">
          <span class="title">Groups</span>
          <span class="subtitle" *ngIf="getSelectedGroupsCount() > 0">
            {{getSelectedGroupsCount()}} selected
          </span>
        </div>
        
        <!-- Search Groups -->
        <div class="group-search">
          <ion-searchbar placeholder="Search groups" 
                        mode="ios"
                        [(ngModel)]="groupSearchTerm"
                        (ionInput)="filterGroups()"
                        class="group-searchbar">
          </ion-searchbar>
        </div>

        <!-- Groups Grid -->
        <div class="group-chips" [class.has-search]="groupSearchTerm">
          <div class="filter-chip" 
               *ngFor="let group of filteredGroups"
               [class.active]="group.selected"
               (click)="toggleGroup(group)">
            <div class="group-icon" [style.background-color]="group.color">
              {{group.name.charAt(0)}}
            </div>
            <span class="group-name">{{group.name}}</span>
            <ion-icon name="checkmark" 
                      class="check-icon"
                      *ngIf="group.selected">
            </ion-icon>
          </div>
        </div>
      </div>

      <!-- Apply Button -->
      <div class="filter-actions">
        <ion-button expand="block" 
                    (click)="applyFilters()"
                    [disabled]="!hasActiveFilters()">
          Apply Filters
        </ion-button>
      </div>
    </div>
  `,
  styles: [`
    .filter-container {
      padding: 20px;
      width: 320px;
      max-width: 100%;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }

      ion-button {
        height: 32px;
        --padding-start: 8px;
        --padding-end: 8px;
        font-size: 13px;
        --color: var(--ion-color-medium);
        
        &:disabled {
          opacity: 0.5;
        }

        ion-icon {
          font-size: 16px;
        }
      }
    }

    .filter-section {
      margin-bottom: 24px;

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .title {
          font-size: 14px;
          font-weight: 600;
          color: var(--ion-color-dark);
        }

        .subtitle {
          font-size: 12px;
          color: var(--ion-color-primary);
          font-weight: 500;
        }
      }
    }

    .content-types {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;

      .filter-chip {
        aspect-ratio: 1;
        padding: 12px 8px;
        
        ion-icon {
          font-size: 24px;
          margin-bottom: 6px;
        }
      }
    }

    .group-search {
      margin-bottom: 12px;

      .group-searchbar {
        padding: 0;
        --box-shadow: none;
        --background: var(--ion-color-light);
        --border-radius: 8px;
        --placeholder-opacity: 0.5;
        --placeholder-color: var(--ion-color-medium);
        
        .searchbar-input {
          font-size: 14px;
        }
      }
    }

    .group-chips {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      max-height: 200px;
      overflow-y: auto;
      padding-right: 4px;

      &.has-search {
        max-height: 150px;
      }

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--ion-color-medium);
        border-radius: 2px;
      }
    }

    .filter-chip {
      background: var(--ion-color-light);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;

      &.active {
        background: var(--ion-color-primary);
        
        ion-icon, span {
          color: white;
        }

        .group-icon {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .group-name {
          color: white !important;
        }
      }

      .group-icon {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 14px;
        color: var(--ion-color-dark);
        margin-bottom: 4px;
      }

      .group-name {
        font-size: 13px;
        color: var(--ion-color-dark);
        text-align: center;
        line-height: 1.2;
      }

      .check-icon {
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 16px;
        color: white;
      }

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .filter-actions {
      margin-top: 8px;
      
      ion-button {
        margin: 0;
        --border-radius: 8px;
        height: 44px;
        font-weight: 500;
        
        &:disabled {
          --background: var(--ion-color-medium);
          opacity: 0.5;
        }
      }
    }

    // Dark mode adjustments
    @media (prefers-color-scheme: dark) {
      .filter-chip {
        background: rgba(var(--ion-color-light-rgb), 0.1);

        &.active {
          background: var(--ion-color-primary);
        }

        .group-name {
          color: var(--ion-color-light);
        }

        .group-icon {
          color: var(--ion-color-light);
        }
      }

      .group-searchbar {
        --background: rgba(var(--ion-color-light-rgb), 0.1) !important;
      }
    }
  `]
})
export class FilterComponent {
  selectedType: string = 'all';
  groupSearchTerm: string = '';
  groups = [
    { id: 1, name: 'Music', selected: false, color: '#FF6B6B' },
    { id: 2, name: 'Sports', selected: false, color: '#4ECDC4' },
    { id: 3, name: 'Technology', selected: false, color: '#45B7D1' },
    { id: 4, name: 'Art & Design', selected: false, color: '#96CEB4' },
    { id: 5, name: 'Gaming', selected: false, color: '#FFEEAD' },
    { id: 6, name: 'Travel', selected: false, color: '#D4A5A5' },
    { id: 7, name: 'Photography', selected: false, color: '#9B89B3' },
    { id: 8, name: 'Food & Cooking', selected: false, color: '#FF9999' }
  ];
  filteredGroups = [...this.groups];

  constructor(private popoverCtrl: PopoverController) {}

  filterGroups() {
    if (!this.groupSearchTerm) {
      this.filteredGroups = [...this.groups];
      return;
    }
    
    const searchTerm = this.groupSearchTerm.toLowerCase();
    this.filteredGroups = this.groups.filter(group => 
      group.name.toLowerCase().includes(searchTerm)
    );
  }

  selectFilter(type: string) {
    this.selectedType = type;
  }

  toggleGroup(group: any) {
    group.selected = !group.selected;
  }

  getSelectedGroupsCount(): number {
    return this.groups.filter(g => g.selected).length;
  }

  hasActiveFilters(): boolean {
    return this.selectedType !== 'all' || this.getSelectedGroupsCount() > 0;
  }

  resetFilters() {
    this.selectedType = 'all';
    this.groups.forEach(g => g.selected = false);
    this.groupSearchTerm = '';
    this.filterGroups();
  }

  applyFilters() {
    const selectedGroups = this.groups
      .filter(g => g.selected)
      .map(g => ({ id: g.id, name: g.name }));

    this.popoverCtrl.dismiss({
      type: this.selectedType,
      groups: selectedGroups
    });
  }
}
