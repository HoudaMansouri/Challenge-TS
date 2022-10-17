interface Animaux {
    name: string;
    type: string;
    paws: number;
    color?: string;
  }
  class Type implements Animaux {
      name: string;
      type: string;
      paws: number;
      color?: string;
      constructor(name: string, type: string, paws: number, color?: string) {
          this.name = name;
          this.type = type;
          this.paws = paws;
          this.color = color;
      }
  }
  class Actions extends Type {
      constructor(name: string, type: string, paws: number,color?: string) {
          super(name, type, paws, color);
      }
      photo() {
      console.log(`Je peux photographier les ${this.name}`);
      }
      miauler(){
          if(this.name === 'Chat') {
              console.log(`Tous les ${this.name} peuvent miauler`)
          }
      }
      aboyer() {
          if(this.name === 'Chien') {
              console.log(`Tous les ${this.name} peuvent aboyer`)
          }
      }
      voler() {
          if(this.name === 'Oiseau') {
              console.log(`Tous les ${this.name} peuvent voler`)
          }
      }
      nager() {
          if(this.name === 'Poisson') {
              console.log(`Tous les ${this.name} peuvent nager`)
          }
      }
      caresser() {
          if(this.paws === 4) {
              console.log(`Tous les ${this.name} peuvent etre caresser`)
          }
      }
      nourrir() {
          if(this.color === 'noir') {
              console.log(`Tous les ${this.name} peuvent etre nourris`)
          }
      }
  }
  const europeen = new Actions("Chat", "Européen", 4, "noir");
  const chartreux = new Actions("Chat", "Chartreux", 4);
  const terreneuve = new Actions("Chien", "Terre-neuve", 4, "noir");
  const moon = new Actions("Chien", "Moon Moon", 4);
  const mesange = new Actions("Oiseau", "Mésange", 2);
  const merle = new Actions("Oiseau", "Merle", 2, "noir");
  const thon = new Actions("Poisson", "Thon", 0);
  const requin = new Actions("Poisson", "Requin", 0);
  const asticot = new Actions("Insecte", "Asticot", 0);

  merle.photo();
  merle.miauler();
  merle.aboyer();
  merle.voler();
  merle.nager();
  merle.caresser();
  merle.nourrir();