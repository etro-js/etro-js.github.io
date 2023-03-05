# Shader Effect

`etro.effect.Shader` is the base class for all effects that render the target with a custom GLSL fragment shader.

When using this effect, you need to provide a fragment shader source and a list of uniforms. The uniforms are automatically updated when the effect is applied. There needs to be a property with the same name as each custom uniform in the effect class. The property can be a [`Dynamic`](/docs/dynamic-properties) or a regular value.

## Usage

```ts
class MyEffect extends etro.effect.Shader {
  foo: Dynamic<number>

  constructor(foo: Dynamic<number> = 1) {
    super({
      fragmentSource: `
        precision mediump float;

        uniform sampler2D u_Source;
        uniform ivec2 u_Size;
        uniform float u_Foo;

        varying vec2 v_TextureCoord;

        void main() {
          vec4 color = texture2D(u_Source, v_TextureCoord);
          gl_FragColor = vec4(color.rgb * u_Foo, color.a);
        }
      `,
      uniforms: {
        foo: '1f',
      },
    })

    this.foo = foo
  }
}

const effect = new MyEffect(() => Math.random())
```

## Inheritance

`etro.effect.Shader` inherits from [`etro.effect.Visual`](visual).

## Options

### `fragmentSource`

The GLSL fragment shader source.

### `uniforms`

A map of uniforms to their types. The types are the same as the ones used in the `uniform` keyword in GLSL. For example, `1f` is a float, `1i` is an integer, and `2f` is a 2D vector.

### `textures`

A map of additional texture uniforms to `TextureOptions`. The source texture is always available as `u_Source`, so there is no need to add it here. See [`TextureOptions`](#textureoptions).

### `sourceTextureOptions`

Options for the source texture. See [`TextureOptions`](#textureoptions).

## `TextureOptions`

:::caution

These options are experimental and may change in the future.

:::

### `createUniform`

If set to `false`, the texture uniform will not be created. This is useful if you want to create the uniform yourself. Defaults to `true`.

The uniform will be created with the name `u_${name}`.

### `target`

The WebGL texture target. Defaults to `'TEXTURE_2D'`.

### `level`

The mipmap level. Defaults to `0`.

### `internalFormat`

The internal format. Defaults to `'RGBA'`.

### `srcFormat`

The source format. Defaults to `'RGBA'`.

### `srcType`

The source type. Defaults to `'UNSIGNED_BYTE'`.

### `minFilter`

The minification filter. Defaults to `'LINEAR'`.

### `magFilter`

The magnification filter. Defaults to `'LINEAR'`.

### `wrapS`

The horizontal wrapping mode. Defaults to `'CLAMP_TO_EDGE'`.

### `wrapT`

The vertical wrapping mode. Defaults to `'CLAMP_TO_EDGE'`.
