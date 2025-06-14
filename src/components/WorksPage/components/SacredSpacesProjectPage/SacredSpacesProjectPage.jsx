import { useEffect } from 'react';
import styles from './SacredSpacesProjectPage.module.css';
import { useStore } from '../../../../StateManagement/store';

export const SacredSpacesProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { toggleManualSlider } = useStore();

    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>Sacred Spaces</p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Over several years of travel, I have always found myself
                        drawn to spiritual places. Despite not considering
                        myself religious throughout my life and only really
                        exploring my spirituality in the last year, these spaces
                        have always been a source of curiosity. These sites have
                        a duality to them; both places of deep spiritual
                        reverence and pilgrimage, whilst simultaneously being
                        economically influenced by, and in some cases dependent
                        on, tourism generated by those of differing faiths.
                    </p>
                    <p>
                        Sometimes this juxtaposition can cause conflict. In a
                        Hindu temple, a religion that encourages vegetarianism,
                        compassion towards living beings and believes in the
                        karmic cycle of reincarnation into animal form, I have
                        witnessed a child tormenting and kicking a resident
                        chicken. I’ve consistently witnessed the blatant
                        disregard of rules concerning the covering of body parts
                        or the removal of shoes. Yet I’ve also witnessed sincere
                        moments of the purest devotion, and the wondrous awe
                        which these places can incite for first time or foreign
                        visitors.
                    </p>
                    <p>
                        This awe, this feeling, this sense of calm and of
                        connection to something much greater than the self is
                        what I now realise draws me to these places. I do not
                        believe that any one religion, philosophy, building or
                        shrine holds the secret to spiritual awakening but that
                        they all have that potentiality. From the polished
                        marble of the Grand Mosque of Oman to the old picture
                        frames stacked haphazardly in the corner of a tiny cave
                        temple in Malaysia, what these places hold in common,
                        despite religions' inherent sectarianism, is that
                        feeling of union, of connection with something greater.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageOneContainer}>
                        <img
                            src={'/Projects/SacredSpaces/04.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwoContainer}>
                        <img
                            src={'/Projects/SacredSpaces/05.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThreeContainer}>
                        <img
                            src={'/Projects/SacredSpaces/12.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourContainer}>
                        <img
                            src={'/Projects/SacredSpaces/17.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFiveContainer}>
                        <img
                            src={'/Projects/SacredSpaces/25.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixContainer}>
                        <img
                            src={'/Projects/SacredSpaces/22.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSevenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/15.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEightContainer}>
                        <img
                            src={'/Projects/SacredSpaces/10.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineContainer}>
                        <img
                            src={'/Projects/SacredSpaces/03.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/11.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageElevenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/18.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwelveContainer}>
                        <img
                            src={'/Projects/SacredSpaces/23.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/20.jpg'}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageFourteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/24.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFifteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/13.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/09.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSeventeenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/01.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEighteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/14.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineteenContainer}>
                        <img
                            src={'/Projects/SacredSpaces/26.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyContainer}>
                        <img
                            src={'/Projects/SacredSpaces/02.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyOneContainer}>
                        <img
                            src={'/Projects/SacredSpaces/06.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyTwoContainer}>
                        <img
                            src={'/Projects/SacredSpaces/16.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyThreeContainer}>
                        <img
                            src={'/Projects/SacredSpaces/19.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFourContainer}>
                        <img
                            src={'/Projects/SacredSpaces/21.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFiveContainer}>
                        <img
                            src={'/Projects/SacredSpaces/07.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
