import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinPipePipe } from './join-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      JoinPipePipe
   ],
  exports:[
    JoinPipePipe
  ]
})
export class TestingJoinPipeModule { }
