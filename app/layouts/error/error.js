import notFoundPoster from '~/assets/notfound.jpg';
import notFoundVideo from '~/assets/notfound.mp4';
import flatlinePoster from '~/assets/flatline.png';
import flatlineVideo from '~/assets/flatline.mp4';
import { Button } from '~/components/Button';
import { DecoderText } from '~/components/DecoderText';
import { Heading } from '~/components/Heading';
import { Text } from '~/components/Text';
import { Transition } from '~/components/Transition';
import styles from './error.module.css';
import { Image } from '~/components/Image';

export function Error({ error }) {
  const flatlined = !error.status;

  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: 'Error: redacted',
          message:
            'This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you.',
        };
      case 405:
        return {
          summary: 'Error: method denied',
          message: error.data,
        };
      default:
        return {
          summary: 'Error: anomaly',
          message: error.data || error.toString(),
        };
    }
  };

  const { summary, message } = getMessage();

  return (
    <section className={styles.page}>
      {flatlined && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            [data-theme='dark'] {
              --rgbPrimary: 255 94 89;
              --rgbAccent: 255 94 89;
            }
            [data-theme='light'] {
              --rgbPrimary: 202 58 54;
              --rgbAccent: 202 58 54;
            }
          `,
          }}
        />
      )}
      <Transition in>
        {({ visible }) => (
          <>
            <div className={styles.details}>
              <div className={styles.text}>
                {!flatlined && (
                  <Heading
                    className={styles.title}
                    data-visible={visible}
                    level={0}
                    weight="bold"
                  >
                    {error.status}
                  </Heading>
                )}
                {flatlined && (
                  <Heading
                    className={styles.titleFlatline}
                    data-visible={visible}
                    level={2}
                    as="h1"
                  >
                    <FlatlineSkull />
                    <DecoderText text="Flatlined" start={visible} delay={300} />
                  </Heading>
                )}
                {!flatlined && (
                  <Heading
                    aria-hidden
                    className={styles.subheading}
                    data-visible={visible}
                    as="h2"
                    level={4}
                  >
                    <DecoderText text={summary} start={visible} delay={300} />
                  </Heading>
                )}
                <Text className={styles.description} data-visible={visible} as="p">
                  {message}
                </Text>
                {flatlined ? (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="https://www.youtube.com/watch?v=EuQzHGcsjlA"
                    icon="chevron-right"
                  >
                    Emotional support
                  </Button>
                ) : (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="/"
                    icon="chevron-right"
                  >
                    Back to homepage
                  </Button>
                )}
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <Image
                reveal
                cover
                noPauseButton
                delay={600}
                className={styles.video}
                src={flatlined ? flatlineVideo : notFoundVideo}
                placeholder={flatlined ? flatlinePoster : notFoundPoster}
              />
              {flatlined ? (
                <a
                  className={styles.credit}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0318871/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animation from Berserk (1997)
                </a>
              ) : (
                <a
                  className={styles.credit}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0113568/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animation from Ghost in the Shell (1995)
                </a>
              )}
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}

function FlatlineSkull() {
  return (
    <svg
      width="60"
      height="80"
      fill="none"
      viewBox="0 0 60 80"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path
        fill="currentColor"
        fillOpacity=".2"
        fillRule="evenodd"
        d="m56.764 60.162-2.93 2.54a.42.42 0 0 1-.123.073l-7.944 3.056a.417.417 0 0 0-.197.158l-3.593 5.39a.417.417 0 0 0-.066.29l.549 3.844a.417.417 0 0 1-.318.466L39.5 77l-2.5.5-3.5 1-3.456.301a.415.415 0 0 1-.095.011h-.344a.415.415 0 0 1-.095-.01L26 78.5l-4-1-2.5-1-2.087-.521a.417.417 0 0 1-.319-.466l.55-3.844a.417.417 0 0 0-.066-.29l-3.593-5.39a.418.418 0 0 0-.198-.158l-7.944-3.056a.42.42 0 0 1-.123-.074l-2.93-2.54a.417.417 0 0 1-.144-.314v-6.574c0-.079.022-.155.063-.222l1.98-3.168a.417.417 0 0 0 .057-.147l.776-4.264a.83.83 0 0 0-.053-.475c-1.234-2.913-3.959-9.504-4.284-11.453-.31-1.865-.158-7.433-.06-11.015.033-1.227.06-2.222.06-2.754C1.185 17.69 7.68 1 30 1c22.322 0 28.369 16.689 28.369 18.775 0 .532.027 1.525.06 2.751v.002c.098 3.582.25 9.151-.06 11.016-.325 1.95-3.05 8.54-4.284 11.453a.831.831 0 0 0-.053.474l.776 4.266c.01.051.029.101.057.146l1.98 3.168a.417.417 0 0 1 .063.222v6.574a.417.417 0 0 1-.144.315ZM38.52 55.048l-2.523-2.018a4.172 4.172 0 0 1-1.552-2.93l-.308-3.893a4.172 4.172 0 0 1 1.588-3.614l1.796-1.405a4.172 4.172 0 0 1 2.807-.88l7.319.414a4.172 4.172 0 0 1 3.312 1.97l.814 1.315c.489.79.7 1.72.6 2.644l-.477 4.42a4.173 4.173 0 0 1-1.742 2.96l-1.064.751a4.173 4.173 0 0 1-2.095.752l-5.556.417a4.172 4.172 0 0 1-2.919-.903Zm-14.734-2.202-2.752 2.202a4.172 4.172 0 0 1-2.919.903l-5.481-.411a4.18 4.18 0 0 1-2.207-.834l-.096-.073a4.172 4.172 0 0 1-1.622-2.81l-.49-3.917a4.172 4.172 0 0 1 .228-1.967l.572-1.545a4.172 4.172 0 0 1 3.593-2.71l6.831-.525a4.173 4.173 0 0 1 2.543.63l2.025 1.275a4.172 4.172 0 0 1 1.866 4.361l-.608 2.994a4.172 4.172 0 0 1-1.483 2.427Zm18.153 7.872-.253.615a1.477 1.477 0 1 1-2.41-1.607l.472-.47a1.344 1.344 0 0 1 2.191 1.462Zm-24.16.664-.233-.682a1.374 1.374 0 0 1 2.28-1.406l.506.515a1.538 1.538 0 1 1-2.554 1.574Z"
      />
      <path
        strokeWidth="1.2"
        d="m39.385 76.1-.626-3.337m-1.877 4.38-.835-3.546m-2.503 4.38-.417-3.754"
      />
      <path d="m54 45.5-1.88-8.784a.42.42 0 0 1-.01-.087V30.34c0-.088.028-.174.079-.245l2.633-3.645M30 78.815V67.759m0 0V56.6c0-.451.617-.581.8-.168l3.684 8.376a.417.417 0 0 1-.063.438L32.42 67.61a.417.417 0 0 1-.319.147H30Zm0-15.623V44m18.564-8.788-7.03-1.24a.415.415 0 0 1-.12-.041l-4.324-2.265m-2.92 2.504-3.547 2.711" />
      <path
        strokeWidth="1.2"
        d="m20.17 76.1.625-3.337m1.878 4.38.834-3.546m2.735 4.38.417-3.754"
      />
      <path d="m5.5 45.5 1.934-8.783c.007-.03.01-.06.01-.09v-6.286a.417.417 0 0 0-.079-.245l-2.633-3.645M30 78.812V67.756m0 0V56.597c0-.451-.617-.58-.8-.168l-3.684 8.376a.417.417 0 0 0 .063.438l2.001 2.365c.08.094.196.148.319.148H30ZM10.99 36.464l6.648-.828a.412.412 0 0 1 .102 0l6.833.828M17.69 71.51l12.225 2.473a.414.414 0 0 0 .17-.001L41.68 71.51M9.97 64.627l1.213-5.052a.418.418 0 0 1 .18-.254l5.074-3.247m35.256 7.51-1.217-4.259a.418.418 0 0 0-.132-.204l-3.867-3.256m7.51-33.795v-4.59M11.014 31.04 8.719 21.027" />
    </svg>
  );
}
