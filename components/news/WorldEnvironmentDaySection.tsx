import AudioReportPlayer from '@/components/ui/AudioReportPlayer'
import FieldVideoGrid from '@/components/ui/FieldVideoGrid'
import { ENVIRONMENT_WEEK_IMAGES } from '@/lib/media'

export default function WorldEnvironmentDaySection() {
  return (
    <section className="section-padding bg-white border-b border-section-divider">
      <div className="container-max">
        <div className="max-w-3xl">
          <span className="section-tag mb-4">
            <span className="w-4 h-0.5 bg-lime-green" />
            Environment Week
          </span>
          <h2 className="heading-lg mt-4 mb-6 green-line">
            Climate and Green World Foundation for World Environmental Day 2026
          </h2>
          <div className="space-y-4 body-md">
            <p>
              World Environment Day is a reminder of our shared responsibility to protect and
              preserve the environment for generations to come. It is an opportunity to raise
              awareness, inspire action, and encourage communities to make meaningful choices that
              support a healthier and more sustainable planet.
            </p>
            <p>
              To mark this important day, Climate and Green World Foundation organized an
              environmental engagement exercise focused on tree planting and other activities aimed
              at promoting environmental awareness and stewardship. By coming together to plant
              trees, engaging in a radio public announcement advertisement and care for our
              surroundings, we took a simple but meaningful step toward creating a greener and more
              resilient future.
            </p>
            <p>
              Every tree planted, every positive environmental action, and every person inspired to
              care for nature contributes to a larger movement for change. World Environment Day
              reminds us that protecting our planet is not the responsibility of a few but a
              collective commitment.
            </p>
            <p>Together, we can take action today for a healthier environment tomorrow.</p>
          </div>
        </div>

        {/* Group pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {ENVIRONMENT_WEEK_IMAGES.map((image) => (
            <div key={image.src} className="media-image-frame">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="media-image-caption">
                <span className="font-comfortaa text-xs uppercase tracking-widest text-lime-green">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Field documentation videos */}
        <div className="mt-14">
          <span className="section-tag mb-6">
            <span className="w-4 h-0.5 bg-lime-green" />
            Field Documentation
          </span>
          <div className="mt-6">
            <FieldVideoGrid />
          </div>
        </div>

        {/* Audio report */}
        <div className="mt-14 max-w-4xl">
          <span className="section-tag mb-6">
            <span className="w-4 h-0.5 bg-lime-green" />
            Listen
          </span>
          <div className="mt-6">
            <AudioReportPlayer />
          </div>
        </div>
      </div>
    </section>
  )
}
