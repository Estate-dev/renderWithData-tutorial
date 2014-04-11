if(Meteor.isClient) {
  Feeds = new Meteor.Collection(null);
  Meteor.startup(function() {
  
    Feeds.insert({title: 'My wild adventure', content: 'Neutra readymade literally, selfies actually Tumblr lomo normcore organic lo-fi brunch semiotics plaid. IPhone hashtag Neutra, food truck flannel flexitarian 8-bit Etsy Odd Future Echo Park aesthetic drinking vinegar scenester put a bird on it. Ethnic street art small batch tattooed twee Echo Park. Meh fashion axe tousled, art party aesthetic typewriter Schlitz selfies gluten-free. Cardigan dreamcatcher 3 wolf moon, single-origin coffee pop-up Bushwick YOLO direct trade Marfa twee. Fingerstache sustainable ethical, wayfarers literally Tonx +1 meh chia locavore retro Brooklyn mumblecore. Tote bag wayfarers locavore, mlkshk ugh readymade irony fanny pack iPhone direct trade PBR&B Pitchfork trust fund.'})
    Feeds.insert({title: 'The kool-aid man commeth', content: 'Welcome to Meteor!'})
  })

  Template.sidebar.feeds = function() {
    return Feeds.find();
  }

  Template.sidebar.events({
    'click .feed': function(event, template) {
      var data = Feeds.findOne(this._id);
      var instance = UI.renderWithData(Template.content, {feed: data});
      UI.insert(instance, $('.content')[0]);
    }
  });

  Template.content.rendered = function() {
    $(this.firstNode).removeClass('fade');
  }
}
