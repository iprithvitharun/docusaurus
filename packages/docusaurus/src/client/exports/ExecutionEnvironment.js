/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const ExecutionEnvironment = {
  canUseDOM,

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseIntersectionObserver: canUseDOM && 'IntersectionObserver' in window,

  canUseViewport: canUseDOM && !!window.screen,
};

module.exports = ExecutionEnvironment;
