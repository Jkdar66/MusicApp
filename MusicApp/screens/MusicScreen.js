import { useTheme } from "@react-navigation/native";
import { Audio } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import SoundCard from "../components/SoundCard";
import ControlPanel from "../components/ControlPanel";
import Layout from "../components/Layout";

const MusicScreen = () => {
  const Colors = useTheme().colors;

  const sounds = [
    require("../assets/1.mp3"),
    require("../assets/2.mp3"),
    require("../assets/3.mp3"),
  ];

  const [soundsInfos, setSoundsInfos] = useState([
    { title: "Sound Nr. 1", key: 0, isPlaying: false },
    { title: "Sound Nr. 2", key: 1, isPlaying: false },
    { title: "Sound Nr. 3", key: 2, isPlaying: false },
  ]);

  const sound = useRef(new Audio.Sound());

  const [index, setIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
<<<<<<< HEAD
  const [soundPosition, setSoundPosition] = useState(0);
  const [soundDuration, setSoundDuration] = useState(0);
  const [soundDurationMillis, setSoundDurationMillis] = useState(0);
  const [soundPositionMillis, setSoundPositionMillis] = useState(0);
=======
  const [positionPercent, setPositionPercent] = useState(0);
>>>>>>> a1b06be1f03d6b05749bf3a605bba6bb75a38c6b

  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: true,
  });

  const PlaySound = async () => {
    try {
      const status = await sound.current.getStatusAsync();
      const infos = [...soundsInfos];
      infos.forEach((info) => (info.isPlaying = false));
      setSoundsInfos(infos);
      if (status.isLoaded) {
        if (!status.isPlaying) {
          sound.current.playAsync();
          setIsPlaying(true);
          const infos = [...soundsInfos];
          infos[index].isPlaying = true;
          setSoundsInfos(infos);
        } else {
          sound.current.pauseAsync();
          setIsPlaying(false);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const ChangeSound = async ({ ind, stopPlaying }) => {
    if (ind >= 0 && ind <= sounds.length - 1) {
      try {
        const status = await sound.current.getStatusAsync();
        if (status.isLoaded) {
          if (ind != index) {
            setShouldPlay(true);
            setIndex(ind);
          } else if (!status.isPlaying || stopPlaying) {
            PlaySound();
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const PlayBack = async () => {
    const newInd = index - 1;
    ChangeSound({ ind: newInd });
  };

  const PlayNext = async () => {
    const newInd = index + 1;
    ChangeSound({ ind: newInd });
  };

  const setSoundPositionValue = async (value) => {
    const status = await sound.current.getStatusAsync();
    const durationInSeconds = Math.floor(status.durationMillis * 0.001);
    const positionInSeconds = value * durationInSeconds;
    sound.current.setStatusAsync({
      positionMillis: positionInSeconds / 0.001,
    });
    !status.isPlaying ? PlaySound() : null;
  };

  const LoadSound = async () => {
    try {
      const infos = [...soundsInfos];
      infos.forEach((info) => (info.isPlaying = false));
      setSoundsInfos(infos);
      const status = await sound.current.getStatusAsync();
      if (status.isLoaded) {
        sound.current.unloadAsync();
      }
      sound.current.loadAsync(sounds[index], { shouldPlay: shouldPlay });
      sound.current.setOnPlaybackStatusUpdate(async (status) => {
<<<<<<< HEAD
        const positionInSeconds = Math.floor(status.positionMillis * 0.001);
        const durationInSeconds = Math.floor(status.durationMillis * 0.001);
        const position = positionInSeconds / durationInSeconds;
        position ? setSoundPosition(parseFloat(position.toFixed(4))) : null;
        setSoundDuration(durationInSeconds);
        setSoundDurationMillis(status.durationMillis);
        setSoundPositionMillis(status.positionMillis);

        if (status.didJustFinish === true) {
          ChangeSound({ ind: index + 1 });
=======
        const durationSeconds = Math.floor(status.durationMillis * 0.001);
        const positionSeconds = Math.floor(status.positionMillis * 0.001);
        const positionPercent = (positionSeconds / durationSeconds) * 100;
        setPositionPercent(positionPercent);
        if (status.didJustFinish === true) {
          ChangeSound(index + 1);
>>>>>>> a1b06be1f03d6b05749bf3a605bba6bb75a38c6b
        }
      });
      setIsPlaying(shouldPlay);
      if (shouldPlay) {
        const infos = [...soundsInfos];
        infos[index].isPlaying = true;
        setSoundsInfos(infos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    LoadSound();
  }, [index]);

  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 5,
          }}
          data={soundsInfos}
          renderItem={({ item, index }) => (
            <SoundCard
              key={item.key}
              index={index}
              title={item.title}
              onPress={() => ChangeSound({ ind: index })}
              isPlaying={soundsInfos[index].isPlaying}
              soundPosition={soundPosition}
              playBtnOnPress={() =>
                ChangeSound({ ind: index, stopPlaying: true })
              }
              Colors={Colors}
            />
          )}
        />
        <ControlPanel
          PlayBack={PlayBack}
          PlayNext={PlayNext}
          PlaySound={PlaySound}
          positionPercent={positionPercent}
          isPlaying={isPlaying}
          soundDuration={soundDuration}
          soundPosition={soundPosition}
          soundPositionMillis={soundPositionMillis}
          soundDurationMillis={soundDurationMillis}
          setSoundPositionValue={setSoundPositionValue}
          index={index}
          maxIndex={sounds.length - 1}
          Colors={Colors}
        />
      </View>
    </Layout>
  );
};

export default MusicScreen;
