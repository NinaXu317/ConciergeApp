const ourSponsors = [
 {name:"Google",amt:"$50 million"},
 {name:"Apple",amt:"$20 million"},
 {name:"Facebook",amt:"$40 million"},
 {name:"Professor Hickey",amt:"$1 million"},
 {name:"Uber",amt:"$20 million"},
]

Template.sponsors.helpers({
	sponsorData: ourSponsors,
  today: new Date()
})
