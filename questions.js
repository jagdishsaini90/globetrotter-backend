const ENTRIES_DATA = [
  {
    city: "Paris",
    country: "France",
    clues: [
      "Known as the 'City of Light' and home to the Eiffel Tower.",
      "Famous for the Louvre Museum, which houses the Mona Lisa.",
    ],
    fun_fact: [
      "The city has only one stop sign in its entire road network.",
      "Paris was originally a Roman city called 'Lutetia'.",
    ],
    trivia: [
      "Paris has more than 1,800 bakeries making fresh baguettes daily.",
      "The Pont Neuf, ironically meaning 'New Bridge', is the oldest standing bridge in Paris.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Madrid, Spain",
      "C) Berlin, Germany",
      "D) Paris, France",
    ],
    correct_answer: "D",
  },
  {
    city: "Tokyo",
    country: "Japan",
    clues: [
      "The most populous city in the world, blending tradition and technology.",
      "Home to the famous Shibuya Crossing and historic temples.",
    ],
    fun_fact: [
      "Tokyo was originally a small fishing village named Edo.",
      "The city has vending machines that sell everything from hot meals to umbrellas.",
    ],
    trivia: [
      "Tokyo’s public transport system is one of the most punctual in the world.",
      "The city hosts the world’s busiest fish market, Tsukiji.",
    ],
    options: [
      "A) Beijing, China",
      "B) Tokyo, Japan",
      "C) Seoul, South Korea",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "B",
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Famous for its Opera House and Harbour Bridge.",
      "One of the world’s largest natural harbors is here.",
    ],
    fun_fact: [
      "Sydney’s Bondi Beach has one of the oldest surf life-saving clubs.",
      "The Sydney Opera House’s roof design was inspired by orange segments.",
    ],
    trivia: [
      "Sydney was originally a penal colony for British convicts.",
      "The city hosts the world’s largest New Year’s Eve fireworks display.",
    ],
    options: [
      "A) Melbourne, Australia",
      "B) Sydney, Australia",
      "C) Auckland, New Zealand",
      "D) Perth, Australia",
    ],
    correct_answer: "B",
  },
  {
    city: "London",
    country: "United Kingdom",
    clues: [
      "Home to Big Ben, Buckingham Palace, and the Tower of London.",
      "Famous for red double-decker buses and black cabs.",
    ],
    fun_fact: [
      "London has over 170 museums, including the British Museum.",
      "The London Underground is the world’s oldest subway system.",
    ],
    trivia: [
      "There are more than 8 million trees in London.",
      "The River Thames once froze so solid that people held fairs on the ice.",
    ],
    options: [
      "A) Dublin, Ireland",
      "B) London, UK",
      "C) Edinburgh, Scotland",
      "D) Amsterdam, Netherlands",
    ],
    correct_answer: "B",
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Home to the tallest building in the world, the Burj Khalifa.",
      "Known for its artificial islands shaped like a palm tree.",
    ],
    fun_fact: [
      "Dubai has a police force that drives supercars.",
      "The city has an indoor ski resort in the middle of the desert.",
    ],
    trivia: [
      "Dubai's public transportation includes an autonomous drone taxi service.",
      "The city once had no postal addresses, relying on landmark-based directions.",
    ],
    options: [
      "A) Doha, Qatar",
      "B) Riyadh, Saudi Arabia",
      "C) Dubai, UAE",
      "D) Abu Dhabi, UAE",
    ],
    correct_answer: "C",
  },
  {
    city: "New York City",
    country: "USA",
    clues: [
      "Known as 'The Big Apple' and home to Times Square.",
      "Statue of Liberty stands at its harbor.",
    ],
    fun_fact: [
      "New York’s subway system has over 472 stations.",
      "Central Park is larger than the country of Monaco.",
    ],
    trivia: [
      "The city has over 800 languages spoken, making it the most linguistically diverse place on Earth.",
      "New York was once called 'New Amsterdam'.",
    ],
    options: [
      "A) Los Angeles, USA",
      "B) New York City, USA",
      "C) San Francisco, USA",
      "D) Washington D.C., USA",
    ],
    correct_answer: "B",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Famous for the Christ the Redeemer statue.",
      "Known for its annual Carnival festival.",
    ],
    fun_fact: [
      "Rio’s Sugarloaf Mountain offers one of the most stunning views in the world.",
      "The city has the world’s largest urban rainforest.",
    ],
    trivia: [
      "Rio’s Maracanã Stadium once held nearly 200,000 fans for a football match.",
      "The city’s Copacabana beach is one of the most famous in the world.",
    ],
    options: [
      "A) São Paulo, Brazil",
      "B) Lima, Peru",
      "C) Buenos Aires, Argentina",
      "D) Rio de Janeiro, Brazil",
    ],
    correct_answer: "D",
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "The capital of Germany, known for its Brandenburg Gate.",
      "Once divided by a wall that fell in 1989.",
    ],
    fun_fact: [
      "Berlin has more bridges than Venice.",
      "The city has the largest Turkish population outside Turkey.",
    ],
    trivia: [
      "Berlin’s public transport system includes an underwater train tunnel.",
      "The Reichstag has a glass dome where visitors can walk above parliament sessions.",
    ],
    options: [
      "A) Munich, Germany",
      "B) Berlin, Germany",
      "C) Vienna, Austria",
      "D) Zurich, Switzerland",
    ],
    correct_answer: "B",
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Canada’s largest city, home to the CN Tower.",
      "Located on the shores of Lake Ontario.",
    ],
    fun_fact: [
      "Toronto has a massive underground shopping mall spanning 30 km.",
      "The city’s sports teams are nicknamed 'The Six'.",
    ],
    trivia: [
      "Toronto’s PATH system is the longest underground pedestrian tunnel in the world.",
      "The city’s name originates from an Indigenous word meaning 'place where trees stand in the water'.",
    ],
    options: [
      "A) Vancouver, Canada",
      "B) Toronto, Canada",
      "C) Montreal, Canada",
      "D) Ottawa, Canada",
    ],
    correct_answer: "B",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Famous for Table Mountain and Robben Island.",
      "Known for its stunning beaches and penguin colonies.",
    ],
    fun_fact: [
      "Cape Town is home to one of the world’s most biodiverse floral regions.",
      "It has the only place in the world where you can swim with African penguins.",
    ],
    trivia: [
      "The city was the first in Africa to host the FIFA World Cup.",
      "It is the oldest city in South Africa, founded in 1652.",
    ],
    options: [
      "A) Nairobi, Kenya",
      "B) Johannesburg, South Africa",
      "C) Cape Town, South Africa",
      "D) Cairo, Egypt",
    ],
    correct_answer: "C",
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "One of the world's oldest cities, known for the Acropolis.",
      "Considered the birthplace of democracy.",
    ],
    fun_fact: [
      "The Olympic Games originated here in 776 BC.",
      "The city is named after the Greek goddess Athena.",
    ],
    trivia: [
      "Athens has more theaters than any other city in the world.",
      "The Parthenon was originally painted in bright colors.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Athens, Greece",
      "C) Istanbul, Turkey",
      "D) Cairo, Egypt",
    ],
    correct_answer: "B",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Home to the Grand Palace and floating markets.",
      "Known for its vibrant street food and nightlife.",
    ],
    fun_fact: [
      "Its full ceremonial name is 168 letters long.",
      "Bangkok’s street food culture is recognized as one of the best in the world.",
    ],
    trivia: [
      "The city has no official zip codes—just districts.",
      "Bangkok was once called the 'Venice of the East' due to its canals.",
    ],
    options: [
      "A) Hanoi, Vietnam",
      "B) Jakarta, Indonesia",
      "C) Bangkok, Thailand",
      "D) Manila, Philippines",
    ],
    correct_answer: "C",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "The only city in the world spanning two continents.",
      "Famous for the Hagia Sophia and Grand Bazaar.",
    ],
    fun_fact: [
      "Istanbul was once known as Constantinople.",
      "The city’s Grand Bazaar has over 4,000 shops.",
    ],
    trivia: [
      "It has the world's second-oldest subway, built in 1875.",
      "The city was the capital of three empires—Roman, Byzantine, and Ottoman.",
    ],
    options: [
      "A) Ankara, Turkey",
      "B) Istanbul, Turkey",
      "C) Athens, Greece",
      "D) Cairo, Egypt",
    ],
    correct_answer: "B",
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Capital of South Korea, home to K-pop culture.",
      "Known for the futuristic Dongdaemun Design Plaza.",
    ],
    fun_fact: [
      "Seoul’s subway is one of the largest in the world, with free Wi-Fi.",
      "The city is home to the world’s first Internet café.",
    ],
    trivia: [
      "More than half of South Korea’s population lives in the Seoul metropolitan area.",
      "The city has a 600-year-old market still operating today.",
    ],
    options: [
      "A) Tokyo, Japan",
      "B) Beijing, China",
      "C) Seoul, South Korea",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "C",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Known for tango, steak, and soccer passion.",
      "Home to the famous Obelisk and colorful La Boca district.",
    ],
    fun_fact: [
      "Buenos Aires has the widest avenue in the world.",
      "The city’s cemetery is home to many famous historical figures.",
    ],
    trivia: [
      "The subway system here is the oldest in Latin America.",
      "More bookstores per capita than any other city.",
    ],
    options: [
      "A) Lima, Peru",
      "B) Rio de Janeiro, Brazil",
      "C) Buenos Aires, Argentina",
      "D) Santiago, Chile",
    ],
    correct_answer: "C",
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Home to the Kremlin and Red Square.",
      "Famous for St. Basil’s Cathedral with colorful domes.",
    ],
    fun_fact: [
      "Moscow’s subway stations are known as 'underground palaces'.",
      "The city has more billionaires than any other European capital.",
    ],
    trivia: [
      "Moscow's Kremlin has the world's largest bell, but it has never rung.",
      "The Moscow Metro system is one of the busiest in the world.",
    ],
    options: [
      "A) St. Petersburg, Russia",
      "B) Moscow, Russia",
      "C) Kiev, Ukraine",
      "D) Warsaw, Poland",
    ],
    correct_answer: "B",
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "The largest city in Africa, near the Great Pyramids.",
      "Home to the Nile River, the longest in the world.",
    ],
    fun_fact: [
      "Cairo has a traffic system with no official lane markings.",
      "The city has one of the world’s oldest universities, Al-Azhar.",
    ],
    trivia: [
      "Cairo’s Tahrir Square was a major site in the Arab Spring movement.",
      "The city’s metro is the only subway system in Africa.",
    ],
    options: [
      "A) Nairobi, Kenya",
      "B) Cape Town, South Africa",
      "C) Cairo, Egypt",
      "D) Casablanca, Morocco",
    ],
    correct_answer: "C",
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "The capital of Mexico, built on an ancient Aztec city.",
      "Home to the floating gardens of Xochimilco.",
    ],
    fun_fact: [
      "Mexico City sinks around 10 inches per year due to its foundation.",
      "The city has the second-largest number of museums in the world.",
    ],
    trivia: [
      "It was once called Tenochtitlán.",
      "Mexico City has the world’s largest university by enrollment.",
    ],
    options: [
      "A) Bogotá, Colombia",
      "B) Lima, Peru",
      "C) Mexico City, Mexico",
      "D) Santiago, Chile",
    ],
    correct_answer: "C",
  },
  {
    city: "Madrid",
    country: "Spain",
    clues: [
      "Capital of Spain, famous for flamenco and art museums.",
      "Home to the Royal Palace, one of the largest in Europe.",
    ],
    fun_fact: [
      "Madrid has the world's oldest restaurant still in operation.",
      "The city’s official symbol is a bear eating from a strawberry tree.",
    ],
    trivia: [
      "Madrid’s metro is one of the largest in the world.",
      "The city was once the capital of the Spanish Empire.",
    ],
    options: [
      "A) Barcelona, Spain",
      "B) Madrid, Spain",
      "C) Seville, Spain",
      "D) Lisbon, Portugal",
    ],
    correct_answer: "B",
  },
  {
    city: "Los Angeles",
    country: "USA",
    clues: [
      "Known as the entertainment capital of the world.",
      "Home to Hollywood and the Walk of Fame.",
    ],
    fun_fact: [
      "LA has the busiest container port in the U.S.",
      "The city has more cars than people.",
    ],
    trivia: [
      "The iconic Hollywood sign originally read 'Hollywoodland'.",
      "Los Angeles is built on a major fault line, making it prone to earthquakes.",
    ],
    options: [
      "A) San Diego, USA",
      "B) Los Angeles, USA",
      "C) San Francisco, USA",
      "D) Las Vegas, USA",
    ],
    correct_answer: "B",
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Famous for its Opera House and Harbour Bridge.",
      "One of the world’s most beautiful natural harbors.",
    ],
    fun_fact: [
      "Sydney has over 100 beaches along its coastline.",
      "The Opera House was originally meant to take four years to build but took 14.",
    ],
    trivia: [
      "Sydney was the first European settlement in Australia.",
      "The city hosted the 2000 Summer Olympics.",
    ],
    options: [
      "A) Melbourne, Australia",
      "B) Sydney, Australia",
      "C) Perth, Australia",
      "D) Auckland, New Zealand",
    ],
    correct_answer: "B",
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Home to the tallest building in the world, Burj Khalifa.",
      "Known for luxury shopping and artificial islands.",
    ],
    fun_fact: [
      "Dubai has no natural rivers.",
      "The city has a police force that uses luxury sports cars.",
    ],
    trivia: [
      "It has the world’s busiest international airport.",
      "The Dubai Mall is the largest shopping mall in the world.",
    ],
    options: [
      "A) Doha, Qatar",
      "B) Dubai, UAE",
      "C) Riyadh, Saudi Arabia",
      "D) Abu Dhabi, UAE",
    ],
    correct_answer: "B",
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "Known as the 'Eternal City'.",
      "Home to the Colosseum and Vatican City.",
    ],
    fun_fact: [
      "The city has more fountains than any other in the world.",
      "Cats are legally allowed to roam among ruins.",
    ],
    trivia: [
      "Rome’s Pantheon has the world’s largest unreinforced concrete dome.",
      "The city is built on seven hills.",
    ],
    options: [
      "A) Florence, Italy",
      "B) Rome, Italy",
      "C) Venice, Italy",
      "D) Madrid, Spain",
    ],
    correct_answer: "B",
  },
  {
    city: "Paris",
    country: "France",
    clues: [
      "Known as the 'City of Light'.",
      "Home to the Eiffel Tower and Louvre Museum.",
    ],
    fun_fact: [
      "The Eiffel Tower was once considered an eyesore.",
      "Paris has the world’s first underground transport system.",
    ],
    trivia: [
      "There are more than 1,800 bakeries in Paris.",
      "The Mona Lisa was stolen from the Louvre in 1911 and recovered in 1913.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Paris, France",
      "C) Vienna, Austria",
      "D) London, UK",
    ],
    correct_answer: "B",
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "Famous for the Berlin Wall and Brandenburg Gate.",
      "Germany’s capital and largest city.",
    ],
    fun_fact: [
      "Berlin has more bridges than Venice.",
      "The Berlin Wall stood for nearly 30 years before being torn down in 1989.",
    ],
    trivia: [
      "Berlin is home to the largest train station in Europe.",
      "The city is nine times bigger than Paris.",
    ],
    options: [
      "A) Munich, Germany",
      "B) Berlin, Germany",
      "C) Hamburg, Germany",
      "D) Vienna, Austria",
    ],
    correct_answer: "B",
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Canada’s largest city, known for the CN Tower.",
      "Has a large underground shopping network called PATH.",
    ],
    fun_fact: [
      "More than half of Toronto’s population was born outside Canada.",
      "The city’s name comes from an indigenous word meaning 'meeting place'.",
    ],
    trivia: [
      "Toronto has over 10 million trees.",
      "The Blue Jays are the only MLB team based outside the U.S.",
    ],
    options: [
      "A) Montreal, Canada",
      "B) Vancouver, Canada",
      "C) Toronto, Canada",
      "D) Ottawa, Canada",
    ],
    correct_answer: "C",
  },
  {
    city: "São Paulo",
    country: "Brazil",
    clues: [
      "Largest city in South America.",
      "Known for its vibrant arts and nightlife.",
    ],
    fun_fact: [
      "São Paulo has the largest Japanese population outside Japan.",
      "The city has over 12,000 restaurants.",
    ],
    trivia: [
      "São Paulo has more helicopters per capita than any other city.",
      "The city’s subway system is one of the most efficient in Latin America.",
    ],
    options: [
      "A) Rio de Janeiro, Brazil",
      "B) São Paulo, Brazil",
      "C) Buenos Aires, Argentina",
      "D) Lima, Peru",
    ],
    correct_answer: "B",
  },
  {
    city: "London",
    country: "UK",
    clues: [
      "Capital of the United Kingdom.",
      "Home to Big Ben and Buckingham Palace.",
    ],
    fun_fact: [
      "London has 170 museums.",
      "More than 300 languages are spoken in the city.",
    ],
    trivia: [
      "The London Underground is the oldest subway system in the world.",
      "London has hosted the Olympics three times.",
    ],
    options: [
      "A) Dublin, Ireland",
      "B) London, UK",
      "C) Edinburgh, UK",
      "D) Paris, France",
    ],
    correct_answer: "B",
  },
  {
    city: "New York City",
    country: "USA",
    clues: [
      "Nicknamed 'The Big Apple'.",
      "Home to Times Square, Central Park, and Wall Street.",
    ],
    fun_fact: [
      "The Statue of Liberty was a gift from France.",
      "NYC has the largest subway system in the world by number of stations.",
    ],
    trivia: [
      "New York was originally called New Amsterdam.",
      "The Empire State Building was the tallest building in the world when completed.",
    ],
    options: [
      "A) Chicago, USA",
      "B) New York City, USA",
      "C) Los Angeles, USA",
      "D) Boston, USA",
    ],
    correct_answer: "B",
  },
  {
    city: "Hong Kong",
    country: "China",
    clues: [
      "Famous for its skyline and Victoria Harbour.",
      "A former British colony returned to China in 1997.",
    ],
    fun_fact: [
      "Has the most skyscrapers of any city in the world.",
      "Over 90% of residents use public transport daily.",
    ],
    trivia: [
      "Hong Kong’s airport was built on an artificial island.",
      "The city has one of the world’s longest escalator systems.",
    ],
    options: [
      "A) Shanghai, China",
      "B) Hong Kong, China",
      "C) Taipei, Taiwan",
      "D) Singapore",
    ],
    correct_answer: "B",
  },
  {
    city: "Singapore",
    country: "Singapore",
    clues: [
      "A city-state known for its cleanliness and strict laws.",
      "Home to Marina Bay Sands and Sentosa Island.",
    ],
    fun_fact: [
      "Singapore has four official languages.",
      "Chewing gum is banned except for medicinal use.",
    ],
    trivia: [
      "Singapore is one of only three city-states in the world.",
      "It imports most of its water from Malaysia.",
    ],
    options: [
      "A) Kuala Lumpur, Malaysia",
      "B) Singapore",
      "C) Jakarta, Indonesia",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "B",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Famous for Table Mountain and Robben Island.",
      "Located at the southern tip of Africa.",
    ],
    fun_fact: [
      "Cape Town has one of the six floral kingdoms in the world.",
      "It was the first city outside Europe to get street lights.",
    ],
    trivia: [
      "Table Mountain has more plant species than the entire UK.",
      "Cape Town was the first place in Africa to host the World Cup.",
    ],
    options: [
      "A) Nairobi, Kenya",
      "B) Cape Town, South Africa",
      "C) Johannesburg, South Africa",
      "D) Lagos, Nigeria",
    ],
    correct_answer: "B",
  },
  {
    city: "San Francisco",
    country: "USA",
    clues: [
      "Famous for the Golden Gate Bridge and cable cars.",
      "Home to Alcatraz Island and Silicon Valley.",
    ],
    fun_fact: [
      "San Francisco’s cable cars are the only moving National Historic Landmark.",
      "It has the steepest street in the U.S. (Filbert Street).",
    ],
    trivia: [
      "The city was destroyed by a major earthquake in 1906.",
      "It has more dogs than children.",
    ],
    options: [
      "A) Los Angeles, USA",
      "B) San Diego, USA",
      "C) San Francisco, USA",
      "D) Seattle, USA",
    ],
    correct_answer: "C",
  },
  {
    city: "Delhi",
    country: "India",
    clues: [
      "Capital of India, home to India Gate and Red Fort.",
      "One of the world’s most populous cities.",
    ],
    fun_fact: [
      "Delhi’s metro is one of the largest in the world.",
      "The city has the world’s tallest brick minaret, Qutub Minar.",
    ],
    trivia: [
      "Delhi is one of the oldest continuously inhabited cities in the world.",
      "It has the most polluted air of any capital city.",
    ],
    options: [
      "A) Mumbai, India",
      "B) Kolkata, India",
      "C) Delhi, India",
      "D) Bangalore, India",
    ],
    correct_answer: "C",
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "Known as the 'City of Canals'.",
      "Famous for gondolas and the Grand Canal.",
    ],
    fun_fact: ["Venice is slowly sinking.", "It has over 400 bridges."],
    trivia: [
      "Venice was once an independent republic for over 1,000 years.",
      "The city has no roads, only canals.",
    ],
    options: [
      "A) Florence, Italy",
      "B) Venice, Italy",
      "C) Rome, Italy",
      "D) Naples, Italy",
    ],
    correct_answer: "B",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Capital of Portugal, known for its trams and hills.",
      "Home to the iconic Belém Tower.",
    ],
    fun_fact: [
      "Lisbon is older than Rome.",
      "The city was destroyed by an earthquake in 1755.",
    ],
    trivia: [
      "Lisbon’s yellow trams are one of its most famous attractions.",
      "The Vasco da Gama Bridge is the longest in Europe.",
    ],
    options: [
      "A) Madrid, Spain",
      "B) Lisbon, Portugal",
      "C) Barcelona, Spain",
      "D) Porto, Portugal",
    ],
    correct_answer: "B",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    clues: [
      "Known as the 'Red City' due to its clay buildings.",
      "Famous for its bustling souks and Jemaa el-Fnaa square.",
    ],
    fun_fact: [
      "Marrakech has one of the busiest marketplaces in Africa.",
      "The city’s gardens were once owned by Yves Saint Laurent.",
    ],
    trivia: [
      "Marrakech was the capital of Morocco until 1912.",
      "The Koutoubia Mosque has a minaret that inspired La Giralda in Spain.",
    ],
    options: [
      "A) Casablanca, Morocco",
      "B) Cairo, Egypt",
      "C) Marrakech, Morocco",
      "D) Tunis, Tunisia",
    ],
    correct_answer: "C",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Built on 14 islands, connected by 57 bridges.",
      "Home to the Nobel Prize ceremonies.",
    ],
    fun_fact: [
      "Stockholm’s subway is called the 'world’s longest art gallery'.",
      "The city was founded in 1252.",
    ],
    trivia: [
      "Stockholm’s old town is one of the best-preserved medieval city centers in Europe.",
      "The city’s ice hotel is rebuilt every winter.",
    ],
    options: [
      "A) Oslo, Norway",
      "B) Helsinki, Finland",
      "C) Stockholm, Sweden",
      "D) Copenhagen, Denmark",
    ],
    correct_answer: "C",
  },
  {
    city: "Edinburgh",
    country: "Scotland",
    clues: [
      "Scotland’s capital, known for its medieval Old Town.",
      "Famous for its annual Fringe Festival.",
    ],
    fun_fact: [
      "Edinburgh has more listed buildings than anywhere in the world.",
      "The city’s castle sits on an extinct volcano.",
    ],
    trivia: [
      "The city has a dog cemetery within its castle.",
      "Edinburgh was the first city in the world to have its own fire brigade.",
    ],
    options: [
      "A) Dublin, Ireland",
      "B) Edinburgh, Scotland",
      "C) Glasgow, Scotland",
      "D) London, UK",
    ],
    correct_answer: "B",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Capital of Argentina, known as the 'Paris of South America.'",
      "Birthplace of the tango dance.",
    ],
    fun_fact: [
      "Buenos Aires has the widest avenue in the world, Avenida 9 de Julio.",
      "The city has more bookstores per capita than any other in the world.",
    ],
    trivia: [
      "Buenos Aires was named after the Virgin Mary.",
      "It has over 280 theaters, one of the highest numbers in the world.",
    ],
    options: [
      "A) Santiago, Chile",
      "B) Rio de Janeiro, Brazil",
      "C) Buenos Aires, Argentina",
      "D) Lima, Peru",
    ],
    correct_answer: "C",
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "Home to the Great Pyramids of Giza and the Sphinx.",
      "Largest city in Africa.",
    ],
    fun_fact: [
      "Cairo’s metro is the only subway system in Africa.",
      "It is known as the 'City of a Thousand Minarets' due to its many mosques.",
    ],
    trivia: [
      "The pyramids were once covered in white limestone.",
      "Cairo is one of the oldest continuously inhabited cities in the world.",
    ],
    options: [
      "A) Alexandria, Egypt",
      "B) Cairo, Egypt",
      "C) Tunis, Tunisia",
      "D) Algiers, Algeria",
    ],
    correct_answer: "B",
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    clues: [
      "Capital of Vietnam, known for its Old Quarter.",
      "Famous for Hoan Kiem Lake and French colonial architecture.",
    ],
    fun_fact: [
      "Hanoi’s street names often indicate the type of goods sold there.",
      "The city was called Thang Long, meaning 'Ascending Dragon,' before being renamed.",
    ],
    trivia: [
      "Hanoi has a railway street where trains pass inches away from houses.",
      "It is the second-largest city in Vietnam after Ho Chi Minh City.",
    ],
    options: [
      "A) Bangkok, Thailand",
      "B) Ho Chi Minh City, Vietnam",
      "C) Hanoi, Vietnam",
      "D) Phnom Penh, Cambodia",
    ],
    correct_answer: "C",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "The only city in the world located on two continents.",
      "Home to the Hagia Sophia and Blue Mosque.",
    ],
    fun_fact: [
      "Istanbul was previously called Byzantium and later Constantinople.",
      "The Grand Bazaar has over 4,000 shops and is one of the oldest markets in the world.",
    ],
    trivia: [
      "Istanbul has the third-oldest subway in the world.",
      "It is the most populous city in Europe.",
    ],
    options: [
      "A) Athens, Greece",
      "B) Istanbul, Turkey",
      "C) Cairo, Egypt",
      "D) Tehran, Iran",
    ],
    correct_answer: "B",
  },
  {
    city: "Los Angeles",
    country: "USA",
    clues: [
      "Home to Hollywood and the entertainment industry.",
      "Known for its sunny beaches and Griffith Observatory.",
    ],
    fun_fact: [
      "Los Angeles is one of the most diverse cities in the world.",
      "The city’s full name is 'El Pueblo de Nuestra Señora la Reina de los Ángeles'.",
    ],
    trivia: [
      "L.A. has more cars than people.",
      "It was originally part of Mexico before becoming U.S. territory.",
    ],
    options: [
      "A) San Diego, USA",
      "B) Los Angeles, USA",
      "C) San Francisco, USA",
      "D) Las Vegas, USA",
    ],
    correct_answer: "B",
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "Capital of Mexico, built on the ruins of the Aztec city of Tenochtitlán.",
      "Home to the historic Zócalo square.",
    ],
    fun_fact: [
      "Mexico City is sinking by about 50 cm per year.",
      "It has the most museums of any city in the world.",
    ],
    trivia: [
      "The city is built on a lake, which causes it to sink over time.",
      "It has the largest university in Latin America.",
    ],
    options: [
      "A) Guadalajara, Mexico",
      "B) Monterrey, Mexico",
      "C) Mexico City, Mexico",
      "D) Bogotá, Colombia",
    ],
    correct_answer: "C",
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Capital of Russia, home to the Kremlin and Red Square.",
      "Known for its colorful St. Basil’s Cathedral.",
    ],
    fun_fact: [
      "Moscow’s metro stations are considered some of the most beautiful in the world.",
      "The city has more billionaires than any other European city.",
    ],
    trivia: [
      "Moscow’s Kremlin is the largest medieval fortress in the world.",
      "The Moscow River runs through the city.",
    ],
    options: [
      "A) St. Petersburg, Russia",
      "B) Kyiv, Ukraine",
      "C) Moscow, Russia",
      "D) Warsaw, Poland",
    ],
    correct_answer: "C",
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Capital of South Korea, known for its high-tech culture.",
      "Home to the DMZ border with North Korea.",
    ],
    fun_fact: [
      "Seoul has the world’s fastest internet speeds.",
      "The city’s subway system is one of the largest in the world.",
    ],
    trivia: [
      "Seoul’s population is larger than New York City’s.",
      "It was originally called Hanseong.",
    ],
    options: [
      "A) Tokyo, Japan",
      "B) Beijing, China",
      "C) Seoul, South Korea",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "C",
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "One of the world’s oldest cities, birthplace of democracy.",
      "Home to the Acropolis and Parthenon.",
    ],
    fun_fact: [
      "Athens has been continuously inhabited for over 3,000 years.",
      "The first modern Olympic Games were held here in 1896.",
    ],
    trivia: [
      "Athens was named after the goddess Athena.",
      "It is one of the sunniest cities in Europe.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Athens, Greece",
      "C) Istanbul, Turkey",
      "D) Madrid, Spain",
    ],
    correct_answer: "B",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Capital of Thailand, known for its street food and floating markets.",
      "Has the longest ceremonial name of any city in the world.",
    ],
    fun_fact: [
      "Bangkok’s full name has 168 letters.",
      "It is home to the world’s largest Chinatown.",
    ],
    trivia: [
      "Bangkok was once known as the 'Venice of the East' due to its canals.",
      "The Grand Palace has never been home to Thailand’s royal family.",
    ],
    options: [
      "A) Manila, Philippines",
      "B) Hanoi, Vietnam",
      "C) Bangkok, Thailand",
      "D) Jakarta, Indonesia",
    ],
    correct_answer: "C",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Capital of Portugal, known for its historic trams.",
      "Home to the iconic Belém Tower and pastel de nata pastries.",
    ],
    fun_fact: [
      "Lisbon is one of the oldest cities in Western Europe, predating Rome.",
      "It was destroyed by a massive earthquake in 1755 and rebuilt.",
    ],
    trivia: [
      "Lisbon’s Tram 28 is a major tourist attraction.",
      "It is known as the 'City of Seven Hills.'",
    ],
    options: [
      "A) Madrid, Spain",
      "B) Barcelona, Spain",
      "C) Lisbon, Portugal",
      "D) Rome, Italy",
    ],
    correct_answer: "C",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Capital of Sweden, built on 14 islands.",
      "Home to the Nobel Prize ceremonies.",
    ],
    fun_fact: [
      "Stockholm’s subway is known as 'the world's longest art gallery.'",
      "The city has over 50 bridges connecting its islands.",
    ],
    trivia: [
      "Stockholm was founded in the 13th century.",
      "Its old town is called Gamla Stan.",
    ],
    options: [
      "A) Oslo, Norway",
      "B) Helsinki, Finland",
      "C) Stockholm, Sweden",
      "D) Copenhagen, Denmark",
    ],
    correct_answer: "C",
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Known for its futuristic skyline and luxury shopping.",
      "Home to the tallest building in the world, Burj Khalifa.",
    ],
    fun_fact: [
      "Dubai has an indoor ski resort in the desert.",
      "It has the world's largest artificial island, Palm Jumeirah.",
    ],
    trivia: [
      "Dubai’s police force uses luxury cars like Lamborghinis.",
      "The city’s airport has the world's busiest international passenger traffic.",
    ],
    options: [
      "A) Doha, Qatar",
      "B) Abu Dhabi, UAE",
      "C) Dubai, UAE",
      "D) Riyadh, Saudi Arabia",
    ],
    correct_answer: "C",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Famous for Table Mountain and Robben Island.",
      "Located on the southwestern coast of Africa.",
    ],
    fun_fact: [
      "Cape Town has one of the world’s most biodiverse floral kingdoms.",
      "It was the first city in Africa to host the FIFA World Cup.",
    ],
    trivia: [
      "Cape Town was originally a supply station for ships traveling to Asia.",
      "It is known as the 'Mother City' of South Africa.",
    ],
    options: [
      "A) Johannesburg, South Africa",
      "B) Nairobi, Kenya",
      "C) Cape Town, South Africa",
      "D) Accra, Ghana",
    ],
    correct_answer: "C",
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Largest city in Canada, known for the CN Tower.",
      "Home to one of the most multicultural populations in the world.",
    ],
    fun_fact: [
      "Toronto’s PATH is the world’s largest underground shopping complex.",
      "The city has over 1,500 parks.",
    ],
    trivia: [
      "Toronto is often used as a filming location for New York in movies.",
      "It was originally called York before being renamed.",
    ],
    options: [
      "A) Vancouver, Canada",
      "B) Toronto, Canada",
      "C) Montreal, Canada",
      "D) Ottawa, Canada",
    ],
    correct_answer: "B",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Capital of Argentina, known as the 'Paris of South America.'",
      "Birthplace of the tango dance.",
    ],
    fun_fact: [
      "Buenos Aires has the widest avenue in the world, Avenida 9 de Julio.",
      "The city has more bookstores per capita than any other in the world.",
    ],
    trivia: [
      "Buenos Aires was named after the Virgin Mary.",
      "It has over 280 theaters, one of the highest numbers in the world.",
    ],
    options: [
      "A) Santiago, Chile",
      "B) Rio de Janeiro, Brazil",
      "C) Buenos Aires, Argentina",
      "D) Lima, Peru",
    ],
    correct_answer: "C",
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "Built on over 100 small islands and has no roads.",
      "Famous for its canals and gondolas.",
    ],
    fun_fact: [
      "Venice’s Grand Canal is shaped like an 'S.'",
      "It has over 400 bridges connecting the islands.",
    ],
    trivia: [
      "Venice was once a powerful maritime republic.",
      "The city is slowly sinking due to rising sea levels.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Florence, Italy",
      "C) Venice, Italy",
      "D) Naples, Italy",
    ],
    correct_answer: "C",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    clues: [
      "The world’s northernmost capital.",
      "Known for its geothermal pools and colorful buildings.",
    ],
    fun_fact: [
      "Reykjavik means 'Smoky Bay' due to steam from hot springs.",
      "It has no McDonald’s restaurants.",
    ],
    trivia: [
      "Iceland has more sheep than people.",
      "Reykjavik runs almost entirely on renewable energy.",
    ],
    options: [
      "A) Oslo, Norway",
      "B) Reykjavik, Iceland",
      "C) Helsinki, Finland",
      "D) Stockholm, Sweden",
    ],
    correct_answer: "B",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    clues: [
      "Home to the Petronas Twin Towers, once the world's tallest buildings.",
      "A major hub in Southeast Asia with diverse cultures.",
    ],
    fun_fact: [
      "Kuala Lumpur means 'Muddy Confluence' in Malay.",
      "The Batu Caves near the city house a massive golden statue of Lord Murugan.",
    ],
    trivia: [
      "It has one of the busiest airports in the world.",
      "Its Chinatown is one of the most famous in Asia.",
    ],
    options: [
      "A) Jakarta, Indonesia",
      "B) Manila, Philippines",
      "C) Kuala Lumpur, Malaysia",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "C",
  },
  {
    city: "Havana",
    country: "Cuba",
    clues: [
      "Capital of Cuba, known for its classic cars and colonial architecture.",
      "Famous for its Malecón seawall and vibrant music scene.",
    ],
    fun_fact: [
      "Havana was once the world's most fortified city.",
      "It has one of the world’s oldest baseball leagues.",
    ],
    trivia: [
      "Havana’s old town is a UNESCO World Heritage Site.",
      "Its historic fortress, Castillo del Morro, guarded against pirates.",
    ],
    options: [
      "A) Santo Domingo, Dominican Republic",
      "B) San Juan, Puerto Rico",
      "C) Havana, Cuba",
      "D) Caracas, Venezuela",
    ],
    correct_answer: "C",
  },
  {
    city: "Edinburgh",
    country: "Scotland",
    clues: [
      "Famous for its historic castle sitting atop an extinct volcano.",
      "Hosts the world’s largest arts festival, the Fringe Festival.",
    ],
    fun_fact: [
      "J.K. Rowling wrote much of Harry Potter in Edinburgh cafes.",
      "The city’s New Town is over 200 years old but still called 'New'.",
    ],
    trivia: [
      "Edinburgh has an underground city beneath its streets.",
      "It is nicknamed 'Auld Reekie' due to its historic chimney smoke.",
    ],
    options: [
      "A) Glasgow, Scotland",
      "B) Dublin, Ireland",
      "C) Edinburgh, Scotland",
      "D) Belfast, Northern Ireland",
    ],
    correct_answer: "C",
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Home to K-pop, high-tech innovations, and ancient palaces.",
      "The DMZ, the world’s most heavily militarized border, is nearby.",
    ],
    fun_fact: [
      "Seoul has the world’s fastest internet speeds.",
      "It is home to over 25 million people, nearly half of South Korea’s population.",
    ],
    trivia: [
      "Seoul’s subway system has heated seats in winter.",
      "It has five UNESCO-listed royal palaces.",
    ],
    options: [
      "A) Tokyo, Japan",
      "B) Seoul, South Korea",
      "C) Beijing, China",
      "D) Taipei, Taiwan",
    ],
    correct_answer: "B",
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "The birthplace of classical composers like Mozart and Beethoven.",
      "Famous for its coffee houses and Sachertorte cake.",
    ],
    fun_fact: [
      "Vienna was once the capital of the vast Austro-Hungarian Empire.",
      "It consistently ranks as the world’s most livable city.",
    ],
    trivia: [
      "The world’s oldest zoo, Schönbrunn Zoo, is in Vienna.",
      "Vienna’s Spanish Riding School trains Lipizzaner horses.",
    ],
    options: [
      "A) Zurich, Switzerland",
      "B) Munich, Germany",
      "C) Vienna, Austria",
      "D) Prague, Czech Republic",
    ],
    correct_answer: "C",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "The only city in the world located on two continents.",
      "Home to the Hagia Sophia, Blue Mosque, and Grand Bazaar.",
    ],
    fun_fact: [
      "Istanbul was formerly known as Byzantium and Constantinople.",
      "It was the capital of three major empires: Roman, Byzantine, and Ottoman.",
    ],
    trivia: [
      "The city has over 3,000 mosques.",
      "It straddles both Europe and Asia, separated by the Bosphorus Strait.",
    ],
    options: [
      "A) Athens, Greece",
      "B) Istanbul, Turkey",
      "C) Cairo, Egypt",
      "D) Beirut, Lebanon",
    ],
    correct_answer: "B",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Known for its iconic Christ the Redeemer statue.",
      "Hosts the world’s largest carnival celebration.",
    ],
    fun_fact: [
      "Rio’s Maracanã Stadium once held a world record for attendance.",
      "The city’s name means 'River of January' in Portuguese.",
    ],
    trivia: [
      "Rio’s Copacabana Beach is one of the most famous beaches in the world.",
      "It was the capital of Brazil until 1960.",
    ],
    options: [
      "A) São Paulo, Brazil",
      "B) Buenos Aires, Argentina",
      "C) Rio de Janeiro, Brazil",
      "D) Lima, Peru",
    ],
    correct_answer: "C",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Famous for its street food, floating markets, and ornate temples.",
      "Home to the Grand Palace and the reclining Buddha of Wat Pho.",
    ],
    fun_fact: [
      "Bangkok’s full name is the longest city name in the world.",
      "It is the most visited city in the world.",
    ],
    trivia: [
      "Bangkok’s traffic is so bad that river taxis are popular.",
      "It was originally a small trading post before becoming Thailand’s capital.",
    ],
    options: [
      "A) Ho Chi Minh City, Vietnam",
      "B) Kuala Lumpur, Malaysia",
      "C) Bangkok, Thailand",
      "D) Jakarta, Indonesia",
    ],
    correct_answer: "C",
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Capital of Russia, known for its Red Square and Kremlin.",
      "Home to St. Basil’s Cathedral with its colorful domes.",
    ],
    fun_fact: [
      "Moscow’s Metro stations are decorated like palaces.",
      "It has the world’s largest community of billionaires.",
    ],
    trivia: [
      "Moscow is Europe’s largest city by population.",
      "It has a hidden underground city from the Soviet era.",
    ],
    options: [
      "A) St. Petersburg, Russia",
      "B) Warsaw, Poland",
      "C) Moscow, Russia",
      "D) Minsk, Belarus",
    ],
    correct_answer: "C",
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Home to the iconic Opera House and Harbour Bridge.",
      "Famous for Bondi Beach and its vibrant waterfront.",
    ],
    fun_fact: [
      "Sydney was founded as a British penal colony in 1788.",
      "It has the world’s largest natural harbor.",
    ],
    trivia: [
      "Sydney is not Australia’s capital—Canberra is.",
      "Its Opera House took 14 years to build.",
    ],
    options: [
      "A) Melbourne, Australia",
      "B) Brisbane, Australia",
      "C) Sydney, Australia",
      "D) Perth, Australia",
    ],
    correct_answer: "C",
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "Once divided by a famous wall, now a symbol of unity.",
      "Known for Brandenburg Gate and its vibrant arts scene.",
    ],
    fun_fact: [
      "Berlin has more bridges than Venice.",
      "It was the first city in the world to host a film festival.",
    ],
    trivia: [
      "Berlin’s subway system was split during the Cold War.",
      "It has the largest train station in Europe.",
    ],
    options: [
      "A) Munich, Germany",
      "B) Berlin, Germany",
      "C) Hamburg, Germany",
      "D) Frankfurt, Germany",
    ],
    correct_answer: "B",
  },
  {
    city: "Mumbai",
    country: "India",
    clues: [
      "Home to Bollywood and India’s financial hub.",
      "Famous for the Gateway of India and Marine Drive.",
    ],
    fun_fact: [
      "Mumbai’s local trains carry over 7 million passengers daily.",
      "The city was originally a group of seven islands.",
    ],
    trivia: [
      "Mumbai’s Dharavi is one of the largest slums in the world.",
      "It was called Bombay until 1995.",
    ],
    options: [
      "A) Delhi, India",
      "B) Kolkata, India",
      "C) Mumbai, India",
      "D) Chennai, India",
    ],
    correct_answer: "C",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Famous for Table Mountain and its stunning coastline.",
      "Robben Island, where Nelson Mandela was imprisoned, is located nearby.",
    ],
    fun_fact: [
      "Cape Town is home to the only penguin colony in Africa.",
      "It was the first city outside Europe to get its own castle.",
    ],
    trivia: [
      "Cape Town is known as the 'Mother City' of South Africa.",
      "It was named the World Design Capital in 2014.",
    ],
    options: [
      "A) Johannesburg, South Africa",
      "B) Nairobi, Kenya",
      "C) Cape Town, South Africa",
      "D) Durban, South Africa",
    ],
    correct_answer: "C",
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Canada’s largest city and a major financial hub.",
      "Home to the iconic CN Tower and the Toronto Raptors.",
    ],
    fun_fact: [
      "Toronto has over 10 million trees within its city limits.",
      "It has the third-largest public transit system in North America.",
    ],
    trivia: [
      "Toronto is one of the most multicultural cities in the world.",
      "The city has over 140 languages spoken.",
    ],
    options: [
      "A) Vancouver, Canada",
      "B) Montreal, Canada",
      "C) Toronto, Canada",
      "D) Calgary, Canada",
    ],
    correct_answer: "C",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    clues: [
      "Home to the tallest building in the world, the Burj Khalifa.",
      "Famous for its artificial Palm Islands and luxury shopping.",
    ],
    fun_fact: [
      "Dubai has no rivers, but it has the world’s largest indoor ski slope.",
      "It was a small fishing village before its rapid development.",
    ],
    trivia: [
      "Dubai’s police force has supercars like Lamborghinis and Bugattis.",
      "The city’s airport is one of the busiest in the world.",
    ],
    options: [
      "A) Doha, Qatar",
      "B) Dubai, UAE",
      "C) Riyadh, Saudi Arabia",
      "D) Abu Dhabi, UAE",
    ],
    correct_answer: "B",
  },
  {
    city: "Madrid",
    country: "Spain",
    clues: [
      "The capital of Spain, famous for its royal palace.",
      "Home to Real Madrid, one of the world’s most famous football clubs.",
    ],
    fun_fact: [
      "Madrid is the highest capital city in Europe by elevation.",
      "The city never officially sleeps, with late-night dining and vibrant nightlife.",
    ],
    trivia: [
      "Madrid has the oldest restaurant in the world, founded in 1725.",
      "It is known as the 'Bear and the Strawberry Tree' city.",
    ],
    options: [
      "A) Barcelona, Spain",
      "B) Madrid, Spain",
      "C) Seville, Spain",
      "D) Valencia, Spain",
    ],
    correct_answer: "B",
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    clues: [
      "Vietnam’s capital, known for its ancient temples and street food.",
      "Home to the famous Ho Chi Minh Mausoleum.",
    ],
    fun_fact: [
      "Hanoi has more motorbikes than people.",
      "The city’s Old Quarter has 36 streets named after different trades.",
    ],
    trivia: [
      "Hanoi was once called Thăng Long, meaning 'Ascending Dragon.'",
      "It has one of the world’s oldest universities, founded in 1070.",
    ],
    options: [
      "A) Ho Chi Minh City, Vietnam",
      "B) Bangkok, Thailand",
      "C) Hanoi, Vietnam",
      "D) Phnom Penh, Cambodia",
    ],
    correct_answer: "C",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    clues: [
      "Denmark’s capital, famous for its colorful Nyhavn harbor.",
      "The home of the Little Mermaid statue and Tivoli Gardens.",
    ],
    fun_fact: [
      "Copenhagen is one of the most bike-friendly cities in the world.",
      "It was once a Viking fishing village.",
    ],
    trivia: [
      "Copenhagen has more bicycles than cars.",
      "It is consistently ranked among the happiest cities in the world.",
    ],
    options: [
      "A) Stockholm, Sweden",
      "B) Copenhagen, Denmark",
      "C) Oslo, Norway",
      "D) Helsinki, Finland",
    ],
    correct_answer: "B",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "The capital of Portugal, known for its yellow trams and hilly streets.",
      "Famous for its pastel de nata (custard tarts) and fado music.",
    ],
    fun_fact: [
      "Lisbon is older than Rome by several centuries.",
      "It was almost entirely rebuilt after a massive earthquake in 1755.",
    ],
    trivia: [
      "Lisbon’s Vasco da Gama Bridge is one of the longest in Europe.",
      "It is the only European capital located along the Atlantic Ocean.",
    ],
    options: [
      "A) Madrid, Spain",
      "B) Porto, Portugal",
      "C) Lisbon, Portugal",
      "D) Barcelona, Spain",
    ],
    correct_answer: "C",
  },
  {
    city: "Osaka",
    country: "Japan",
    clues: [
      "Japan’s food capital, famous for takoyaki and okonomiyaki.",
      "Home to Universal Studios Japan and Osaka Castle.",
    ],
    fun_fact: [
      "Osaka has the first-ever convenience store in Japan.",
      "It was historically known as the 'nation’s kitchen.'",
    ],
    trivia: [
      "Osaka’s Dotonbori area is famous for its neon lights and giant billboards.",
      "It has one of the largest aquariums in the world.",
    ],
    options: [
      "A) Kyoto, Japan",
      "B) Osaka, Japan",
      "C) Tokyo, Japan",
      "D) Hiroshima, Japan",
    ],
    correct_answer: "B",
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "One of the largest cities in the world, built on an ancient Aztec capital.",
      "Home to Frida Kahlo’s Blue House and the massive Zócalo square.",
    ],
    fun_fact: [
      "Mexico City was originally built on a lake, causing it to sink every year.",
      "It has more museums than any other city in the world.",
    ],
    trivia: [
      "The city was originally called Tenochtitlán.",
      "It has the world’s largest metro system by number of stations.",
    ],
    options: [
      "A) Guadalajara, Mexico",
      "B) Mexico City, Mexico",
      "C) Buenos Aires, Argentina",
      "D) Lima, Peru",
    ],
    correct_answer: "B",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "Known as the 'City of a Hundred Spires' due to its historic churches.",
      "Home to the world’s oldest working astronomical clock.",
    ],
    fun_fact: [
      "Prague’s Charles Bridge is lined with statues of saints.",
      "It has the largest castle complex in the world.",
    ],
    trivia: [
      "The city was never bombed during World War II, preserving its medieval architecture.",
      "The Czech Republic consumes the most beer per capita in the world.",
    ],
    options: [
      "A) Vienna, Austria",
      "B) Budapest, Hungary",
      "C) Prague, Czech Republic",
      "D) Krakow, Poland",
    ],
    correct_answer: "C",
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "Known as the 'City of Music' due to its rich classical music heritage.",
      "Home to Schönbrunn Palace and the famous Viennese coffee culture.",
    ],
    fun_fact: [
      "Vienna has the oldest zoo in the world, founded in 1752.",
      "The city has been ranked as the world's most livable city multiple times.",
    ],
    trivia: [
      "Vienna was the home of famous composers like Mozart and Beethoven.",
      "The Vienna Philharmonic Orchestra is one of the best in the world.",
    ],
    options: [
      "A) Budapest, Hungary",
      "B) Vienna, Austria",
      "C) Munich, Germany",
      "D) Prague, Czech Republic",
    ],
    correct_answer: "B",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Known as the 'Paris of South America' due to its European architecture.",
      "The birthplace of tango, a world-famous dance.",
    ],
    fun_fact: [
      "Buenos Aires has more bookstores per capita than any other city in the world.",
      "The city has the widest avenue in the world, Avenida 9 de Julio.",
    ],
    trivia: [
      "It is home to La Boca, a colorful neighborhood famous for its street art.",
      "Argentina’s presidential palace, Casa Rosada, is pink.",
    ],
    options: [
      "A) Lima, Peru",
      "B) Buenos Aires, Argentina",
      "C) Santiago, Chile",
      "D) São Paulo, Brazil",
    ],
    correct_answer: "B",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "A city that spans two continents, Europe and Asia.",
      "Home to the famous Hagia Sophia and the Grand Bazaar.",
    ],
    fun_fact: [
      "Istanbul was formerly known as Byzantium and later Constantinople.",
      "It is the only city in the world located on two continents.",
    ],
    trivia: [
      "The city has over 3,000 mosques, including the Blue Mosque.",
      "Tulips, now associated with the Netherlands, originally came from Turkey.",
    ],
    options: [
      "A) Athens, Greece",
      "B) Istanbul, Turkey",
      "C) Cairo, Egypt",
      "D) Tehran, Iran",
    ],
    correct_answer: "B",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    clues: [
      "Capital of Malaysia, famous for its Petronas Twin Towers.",
      "A melting pot of Malay, Chinese, and Indian cultures.",
    ],
    fun_fact: [
      "Kuala Lumpur has one of the largest covered bird parks in the world.",
      "The city’s name means 'muddy confluence' in Malay.",
    ],
    trivia: [
      "The Petronas Towers were once the tallest buildings in the world.",
      "Malaysia’s national dish, nasi lemak, is a popular breakfast here.",
    ],
    options: [
      "A) Bangkok, Thailand",
      "B) Singapore, Singapore",
      "C) Kuala Lumpur, Malaysia",
      "D) Jakarta, Indonesia",
    ],
    correct_answer: "C",
  },
  {
    city: "Helsinki",
    country: "Finland",
    clues: [
      "Capital of Finland, located on the shores of the Baltic Sea.",
      "Famous for its modern design and sauna culture.",
    ],
    fun_fact: [
      "Helsinki has more saunas than cars.",
      "It was once the design capital of the world.",
    ],
    trivia: [
      "Helsinki’s Suomenlinna fortress is a UNESCO World Heritage site.",
      "The city hosts an annual 'Wife Carrying' championship.",
    ],
    options: [
      "A) Stockholm, Sweden",
      "B) Helsinki, Finland",
      "C) Oslo, Norway",
      "D) Copenhagen, Denmark",
    ],
    correct_answer: "B",
  },
  {
    city: "Edinburgh",
    country: "Scotland",
    clues: [
      "Scotland’s capital, known for its medieval Old Town and castle.",
      "Home to the famous Edinburgh Festival Fringe, the world’s largest arts festival.",
    ],
    fun_fact: [
      "Edinburgh has an underground city beneath its streets.",
      "J.K. Rowling wrote the first Harry Potter book here.",
    ],
    trivia: [
      "Edinburgh was the first city in the world to have its own fire brigade.",
      "It is built on seven hills, just like Rome.",
    ],
    options: [
      "A) Glasgow, Scotland",
      "B) Dublin, Ireland",
      "C) Edinburgh, Scotland",
      "D) London, England",
    ],
    correct_answer: "C",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Famous for its Christ the Redeemer statue and Copacabana Beach.",
      "Host of the 2016 Summer Olympics.",
    ],
    fun_fact: [
      "Rio’s Carnival is the largest in the world, attracting millions of visitors.",
      "It has one of the largest urban forests in the world, Tijuca Forest.",
    ],
    trivia: [
      "Rio’s Sugarloaf Mountain offers one of the best views of the city.",
      "The city was once the capital of Portugal when the royal family fled Napoleon.",
    ],
    options: [
      "A) Buenos Aires, Argentina",
      "B) Rio de Janeiro, Brazil",
      "C) Lima, Peru",
      "D) Santiago, Chile",
    ],
    correct_answer: "B",
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "A high-tech city blending ancient palaces with modern skyscrapers.",
      "Home to K-pop, Korean BBQ, and the futuristic Gangnam district.",
    ],
    fun_fact: [
      "Seoul’s metro system is one of the most advanced in the world.",
      "It has more coffee shops per capita than Seattle.",
    ],
    trivia: [
      "Seoul’s Namsan Tower lights up in different colors based on air quality.",
      "The city is only about 35 miles from the North Korean border.",
    ],
    options: [
      "A) Beijing, China",
      "B) Tokyo, Japan",
      "C) Seoul, South Korea",
      "D) Bangkok, Thailand",
    ],
    correct_answer: "C",
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "One of the world’s oldest cities, home to the Parthenon.",
      "Considered the birthplace of democracy.",
    ],
    fun_fact: [
      "Athens has more theaters than any other city in the world.",
      "The Olympic Games were revived here in 1896.",
    ],
    trivia: [
      "The city was named after the Greek goddess Athena.",
      "The Acropolis is visible from almost anywhere in the city.",
    ],
    options: [
      "A) Rome, Italy",
      "B) Athens, Greece",
      "C) Istanbul, Turkey",
      "D) Cairo, Egypt",
    ],
    correct_answer: "B",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Built on 14 islands connected by over 50 bridges.",
      "Home to the Nobel Prize ceremony and ABBA museum.",
    ],
    fun_fact: [
      "Stockholm’s subway system is known as the 'world’s longest art gallery.'",
      "It has a system of underground bunkers for emergencies.",
    ],
    trivia: [
      "Stockholm Syndrome was named after a bank robbery that happened here.",
      "The city has a royal palace with over 600 rooms.",
    ],
    options: [
      "A) Copenhagen, Denmark",
      "B) Stockholm, Sweden",
      "C) Oslo, Norway",
      "D) Helsinki, Finland",
    ],
    correct_answer: "B",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Famous for Table Mountain and the Cape of Good Hope.",
      "Known for its colorful Bo-Kaap neighborhood and Robben Island.",
    ],
    fun_fact: [
      "Cape Town is home to the only penguin colony in Africa.",
      "It was the first city outside of Europe to get Blue Flag status for its beaches.",
    ],
    trivia: [
      "Nelson Mandela was imprisoned on Robben Island for 18 years.",
      "The city is also known as the 'Mother City' of South Africa.",
    ],
    options: [
      "A) Nairobi, Kenya",
      "B) Cape Town, South Africa",
      "C) Lagos, Nigeria",
      "D) Cairo, Egypt",
    ],
    correct_answer: "B",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    clues: [
      "The northernmost capital city in the world.",
      "Known for its geothermal hot springs and the Northern Lights.",
    ],
    fun_fact: [
      "Reykjavik has no McDonald's restaurants.",
      "It is one of the cleanest cities in the world due to its use of geothermal energy.",
    ],
    trivia: [
      "The city’s name means 'Smoky Bay' in Icelandic.",
      "Icelanders have no last names; they use patronymics instead.",
    ],
    options: [
      "A) Oslo, Norway",
      "B) Helsinki, Finland",
      "C) Reykjavik, Iceland",
      "D) Nuuk, Greenland",
    ],
    correct_answer: "C",
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "One of the largest cities in the world, built on an ancient lake.",
      "Famous for its floating gardens of Xochimilco and the Frida Kahlo Museum.",
    ],
    fun_fact: [
      "Mexico City sinks about 10 inches per year due to its foundation on a drained lake.",
      "It has more museums than any other city in the world.",
    ],
    trivia: [
      "The city’s main square, Zócalo, was once the center of the Aztec capital Tenochtitlán.",
      "It is home to the largest university in Latin America, UNAM.",
    ],
    options: [
      "A) Bogotá, Colombia",
      "B) Mexico City, Mexico",
      "C) Lima, Peru",
      "D) Santiago, Chile",
    ],
    correct_answer: "B",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    clues: [
      "Known as the 'Red City' for its distinctive red sandstone buildings.",
      "Famous for its bustling souks, palaces, and the Jardin Majorelle.",
    ],
    fun_fact: [
      "Marrakech’s Medina is a UNESCO World Heritage site.",
      "The city’s Jemaa el-Fnaa square is one of the busiest in Africa.",
    ],
    trivia: [
      "The Koutoubia Mosque has inspired designs of many other mosques worldwide.",
      "The city was once a major stop on ancient trans-Saharan trade routes.",
    ],
    options: [
      "A) Cairo, Egypt",
      "B) Marrakech, Morocco",
      "C) Tunis, Tunisia",
      "D) Algiers, Algeria",
    ],
    correct_answer: "B",
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Canada’s largest city and home to the iconic CN Tower.",
      "Known for its multiculturalism and film industry (TIFF).",
    ],
    fun_fact: [
      "Toronto has the longest street in the world, Yonge Street.",
      "The city is home to over 200 ethnic groups speaking more than 160 languages.",
    ],
    trivia: [
      "Toronto’s underground PATH network is the largest shopping complex in the world.",
      "The city was originally called 'York' before being renamed in 1834.",
    ],
    options: [
      "A) Vancouver, Canada",
      "B) Toronto, Canada",
      "C) Montreal, Canada",
      "D) Ottawa, Canada",
    ],
    correct_answer: "B",
  },
  {
    city: "Mumbai",
    country: "India",
    clues: [
      "Home to Bollywood, India’s largest film industry.",
      "Famous for the Gateway of India and Marine Drive.",
    ],
    fun_fact: [
      "Mumbai was originally a group of seven islands.",
      "It has the world's second-largest number of billionaires after New York.",
    ],
    trivia: [
      "Dabbawalas deliver over 200,000 lunchboxes daily with extreme accuracy.",
      "The city was called 'Bombay' until 1995.",
    ],
    options: [
      "A) New Delhi, India",
      "B) Mumbai, India",
      "C) Bangalore, India",
      "D) Kolkata, India",
    ],
    correct_answer: "B",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Thailand’s bustling capital, known for its floating markets.",
      "Famous for the Grand Palace and Wat Arun.",
    ],
    fun_fact: [
      "Bangkok’s full ceremonial name is the longest place name in the world.",
      "It is one of the most visited cities in the world.",
    ],
    trivia: [
      "The city’s street food is considered among the best globally.",
      "Bangkok has the world’s largest Chinatown outside of China.",
    ],
    options: [
      "A) Manila, Philippines",
      "B) Kuala Lumpur, Malaysia",
      "C) Bangkok, Thailand",
      "D) Jakarta, Indonesia",
    ],
    correct_answer: "C",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    clues: [
      "Home to the world’s tallest building, the Burj Khalifa.",
      "Famous for luxury shopping, artificial islands, and desert safaris.",
    ],
    fun_fact: [
      "Dubai has a police force that drives supercars like Lamborghinis.",
      "The city built the world’s largest indoor ski resort in a desert.",
    ],
    trivia: [
      "The Palm Jumeirah is an artificial island shaped like a palm tree.",
      "Dubai has the world’s busiest international airport.",
    ],
    options: [
      "A) Doha, Qatar",
      "B) Abu Dhabi, UAE",
      "C) Dubai, UAE",
      "D) Riyadh, Saudi Arabia",
    ],
    correct_answer: "C",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "Portugal’s capital, known for its yellow trams and hilly streets.",
      "Famous for its fado music and the Belém Tower.",
    ],
    fun_fact: [
      "Lisbon is older than Rome and London.",
      "The city survived one of the deadliest earthquakes in history in 1755.",
    ],
    trivia: [
      "Lisbon’s Vasco da Gama Bridge is the longest in Europe.",
      "It is home to one of the world’s oldest bookstores, founded in 1732.",
    ],
    options: [
      "A) Madrid, Spain",
      "B) Lisbon, Portugal",
      "C) Barcelona, Spain",
      "D) Porto, Portugal",
    ],
    correct_answer: "B",
  },
  {
    city: "Seville",
    country: "Spain",
    clues: [
      "Known for flamenco dancing and the Alcázar palace.",
      "Hosts the famous Feria de Abril and Semana Santa festivals.",
    ],
    fun_fact: [
      "Seville is home to the tomb of Christopher Columbus.",
      "The city inspired the setting for the opera 'Carmen.'",
    ],
    trivia: [
      "The Plaza de España was used as a filming location for 'Star Wars.'",
      "Seville is the hottest city in Europe, with summer temperatures over 40°C (104°F).",
    ],
    options: [
      "A) Valencia, Spain",
      "B) Granada, Spain",
      "C) Seville, Spain",
      "D) Malaga, Spain",
    ],
    correct_answer: "C",
  },
];

module.exports = { ENTRIES_DATA };
