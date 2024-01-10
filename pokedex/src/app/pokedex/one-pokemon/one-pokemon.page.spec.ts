import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnePokemonPage } from './one-pokemon.page';

describe('OnePokemonPage', () => {
  let component: OnePokemonPage;
  let fixture: ComponentFixture<OnePokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OnePokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
