import { Quote } from "lucide-react";

const reviewsLink =
  "https://www.google.com/maps/place/Shri+Giriraj+Sewa+Sadan/@27.5703745,77.6621916,14z/data=!4m8!3m7!1s0x39736e1a3ab83695:0xbfc876719005434e!8m2!3d27.5696282!4d77.6700429!9m1!1b1!16s%2Fg%2F11b6_7snqk?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

const featuredReviews = [
  {
    name: "Lavkush Yadav",
    meta: "Local Guide · 36 reviews",
    time: "2 months ago",
    text:
      "Love the food 130 per person quality is good and pure satvik food need to buy ticket first then they will give the food how much you want but don't waste. For room early booking through online otherwise it's mostly full so rare to get the room on the spot pre-booking is preferred.",
  },
  {
    name: "Shubham Sirohi",
    meta: "Local Guide · 43 reviews",
    time: "a month ago",
    text:
      "Have been there, nice and humble staff. Rooms were clean and affordable. Food is pure Sattvik and close to main road for easy commute.",
  },
  {
    name: "Ashish Misra",
    meta: "Local Guide · 216 reviews",
    time: "4 months ago",
    text:
      "Clean, affordable place. Beware of fake websites, they do not have any website and no booking is done online or through WhatsApp. Do not pay advance. All amount to be paid at checking only.",
  },
  {
    name: "Simmy Dhillon",
    meta: "Local Guide · 7 reviews",
    time: "3 weeks ago",
    text: "Very good staff and adjustable rate and clean room AC and non AC.",
  },
  {
    name: "Ashwani Luthra",
    meta: "1 review",
    time: "2 months ago",
    text: "It’s very nice room and food quality is also very good.",
  },
  {
    name: "Ganesha",
    meta: "Local Guide · 12 reviews",
    time: "8 months ago",
    text: "Very nice place to stay with family and anyone. Food available at lowest price with best quality, cleanliness and best service. Low rents.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-spiritual-yellow/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1 text-primary font-medium text-xs uppercase tracking-wider mb-4 bg-background/70">
            Google Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Guest Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-spiritual-yellow to-primary mx-auto rounded-full mb-5" />
          <p className="text-muted-foreground text-lg">
            Handpicked highlights from recent guests. Explore the full list on Google.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {featuredReviews.map((review, index) => (
            <div
              key={`${review.name}-${review.time}`}
              className={`bg-background p-8 rounded-2xl shadow-sm card-hover relative h-full border border-primary/10 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-spiritual-yellow/25" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {review.meta}
                  </p>
                </div>
                <span className="ml-auto text-xs text-muted-foreground/80">{review.time}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 shadow-md"
          >
            Read Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
