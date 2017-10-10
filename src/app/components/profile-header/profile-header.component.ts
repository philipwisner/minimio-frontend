import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/posts.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnChanges {
  user: User;
  subscriptions = [];
  hasInactive = false;
  hasActive = true;

  constructor(private auth: AuthService, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  ngOnChanges() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  sortOldest() {
    console.log('oldest clicked');
    this.postService.getPostListOldest()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  toggleClass() {
    this.hasInactive = true;
    this.hasActive = false;
    //need to toggle adding and removing the class active & inactive
    }



  }
